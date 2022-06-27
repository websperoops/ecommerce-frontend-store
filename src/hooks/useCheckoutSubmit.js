import Cookies from "js-cookie";
import * as dayjs from "dayjs";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

//internal import
import useAsync from "@hooks/useAsync";
import { UserContext } from "@context/UserContext";
import OrderServices from "@services/OrderServices";
import CouponServices from "@services/CouponServices";
import { notifyError, notifySuccess } from "@utils/toast";
import UserServices from "@services/UserServices";
import ProductServices from "@services/ProductServices";

const useCheckoutSubmit = () => {
  const {
    state: { userInfo, shippingAddress },
    dispatch,
  } = useContext(UserContext);

  const [error, setError] = useState("");
  const [total, setTotal] = useState("");
  const [couponInfo, setCouponInfo] = useState({});
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);
  const [isOutOfStock, setOutOfStock] = useState(false);
  const { data: products, loading } = useAsync(ProductServices.getAllProducts);

  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const couponRef = useRef("");
  const { isEmpty, emptyCart, items, cartTotal } = useCart();

  const { data } = useAsync(CouponServices.getAllCoupons);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (Cookies.get("couponInfo")) {
      const coupon = JSON.parse(Cookies.get("couponInfo"));
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountPercentage);
      setMinimumAmount(coupon.minimumAmount);
    }
  }, []);

  //remove coupon if total value less then minimum amount of coupon
  useEffect(() => {
    if (minimumAmount - discountAmount > total - taxAmount || isEmpty) {
      setDiscountPercentage(0);
      Cookies.remove("couponInfo");
    }
  }, [minimumAmount, total]);

  //calculate total and discount value
  useEffect(() => {
    let totalValue = "";
    let subTotal = (cartTotal + shippingCost).toFixed(2);
    let discountAmount = subTotal * (discountPercentage / 100);
    totalValue = subTotal - discountAmount;
    //tax
    let taxAmount = items.reduce((prev, current) => {
      return prev + (current.originalPrice * current.quantity * ((products.filter(product => product._id === current.id).length > 0 ? products.filter(product => product._id === current.id)[0].tax : 0) / 100))
    }, 0);
    //let taxAmount = totalValue * (13 / 100);
    totalValue += taxAmount;
    setDiscountAmount(discountAmount);
    setTaxAmount(taxAmount);
    setTotal(totalValue);
  }, [cartTotal, shippingCost, discountPercentage, products]);

  //if not login then push user to home page
  useEffect(() => {
    //if (!userInfo) {
    //  router.push('/home');
    //}

    setValue("firstName", shippingAddress.firstName);
    setValue("lastName", shippingAddress.lastName);
    setValue("address", shippingAddress.address);
    setValue("contact", shippingAddress.contact);
    setValue("email", shippingAddress.email);
    setValue("city", shippingAddress.city);
    setValue("country", shippingAddress.province);
    setValue("zipCode", shippingAddress.zipCode);
    setValue("deliveryDate", shippingAddress.deliveryDate);
  }, []);

  useEffect(() => {
    testOutOfStock();
  }, [items])

  const testOutOfStock = async () => {
    const allProducts = await ProductServices.getAllProducts();
    let itemIds = items.map(item => item.id);
    let filteredProducts = allProducts.filter(item => itemIds.includes(item._id));
    let filterQuantity = filteredProducts.filter(item => item.quantity === 0);
    if (filterQuantity.length > 0) {
      setOutOfStock(true);
    } else {
      setOutOfStock(false)
    }
  }

  const submitHandler = async (data) => {
    if (isOutOfStock) {
      notifyError("Please remove the sold out items to proceed");
    } else {
      dispatch({ type: "SAVE_SHIPPING_ADDRESS", payload: data });
      Cookies.set("shippingAddress", JSON.stringify(data));
      setIsCheckoutSubmit(true);
      let id = null;
      if (router.pathname === "/checkout/reorder/[_id]") {
        id = null;
      } else if (router.pathname === "/checkout/[_id]") {
        id = router?.query?._id
      }

      let orderInfo = {
        name: `${data.firstName} ${data.lastName}`,
        address: data.address,
        contact: data.contact,
        email: data.email,
        city: data.city,
        country: data.province,
        zipCode: data.zipCode,
        deliveryDate: data.deliveryDate,
        //shippingOption: data.shippingOption,
        paymentMethod: data.paymentMethod,
        status: "Pending",
        cart: items,
        subTotal: cartTotal,
        shippingCost: shippingCost,
        discount: discountAmount,
        tax: taxAmount,
        total: total,
        coins: Number(total).toFixed(1) * 10,
        _id: id
      };
      if (data.paymentMethod === "Card") {
        if (!stripe) {
          return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

        if (error && !paymentMethod) {
          setError(error.message);
        } else {
          setError("");
          const orderData = {
            ...orderInfo,
            cardInfo: paymentMethod,
          };
          OrderServices.addOrder(orderData)
            .then((res) => {
              const user = JSON.parse(Cookies.get("userInfo"));
              UserServices.updateCart(user._id, { cartItems: [] })
                .then((ress) => {
                  if (ress) {

                    router.push({ pathname: `/order/${res._id}`, query: { name: id !== null ? "updated" : "placed" } });
                    notifySuccess("Your Order Confirmed!");
                    Cookies.remove("couponInfo");
                    emptyCart();
                    setIsCheckoutSubmit(false);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              notifyError(err.message);
              setIsCheckoutSubmit(false);
            });
        }
      }
      if (data.paymentMethod === "PickUp") {
        OrderServices.addOrderCOD(orderInfo)
          .then((res) => {
            const user = JSON.parse(Cookies.get("userInfo"));
            UserServices.updateCart(user._id, { cartItems: [] })
              .then((ress) => {
                if (ress) {

                  router.push({ pathname: `/order/${res._id}`, query: { name: id !== null ? "updated" : "placed" } });
                  notifySuccess("Your Order Confirmed!");
                  Cookies.remove("couponInfo");
                  emptyCart();
                  setIsCheckoutSubmit(false);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            notifyError(err.message);
            setIsCheckoutSubmit(false);
          });
      }
      if (data.paymentMethod === "Delivery") {
        OrderServices.addOrderCOD(orderInfo)
          .then((res) => {
            const user = JSON.parse(Cookies.get("userInfo"));
            UserServices.updateCart(user._id, { cartItems: [] })
              .then((ress) => {
                if (ress) {
                  console.log(ress);

                  router.push({ pathname: `/order/${res._id}`, query: { name: id !== null ? "updated" : "placed" } });
                  notifySuccess("Your Order Confirmed!");
                  Cookies.remove("couponInfo");
                  emptyCart();
                  setIsCheckoutSubmit(false);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            notifyError(err.message);
            setIsCheckoutSubmit(false);
          });
      }
    }
  };

  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  const handleCouponCode = (e) => {
    e.preventDefault();

    if (!couponRef.current.value) {
      notifyError("Please Input a Coupon Code!");
      return;
    }
    const result = data.filter(
      (coupon) =>
        coupon.couponCode.toLowerCase() ===
        couponRef.current.value.toLowerCase()
    );

    if (result.length < 1) {
      notifyError("Please Input a Valid Coupon!");
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError("This coupon is not valid!");
      return;
    }

    if (total - taxAmount < result[0]?.minimumAmount) {
      notifyError(
        `Minimum ${result[0].minimumAmount} CAD required for Apply this coupon!`
      );
      return;
    } else {
      notifySuccess("Coupon is Applied!");
      setDiscountPercentage(result[0].discountPercentage);
      setMinimumAmount(result[0]?.minimumAmount);
      dispatch({ type: "SAVE_COUPON", payload: result[0] });
      Cookies.set("couponInfo", JSON.stringify(result[0]));
    }
    window.location.reload();
  };

  return {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    stripe,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountPercentage,
    discountAmount,
    taxAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    isCheckoutSubmit,
    isOutOfStock
  };
};

export default useCheckoutSubmit;
