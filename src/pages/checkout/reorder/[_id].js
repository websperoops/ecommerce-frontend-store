import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CardElement } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Link from "next/link";
import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
} from "react-icons/io5";
import { ImCreditCard } from "react-icons/im";
import Cookies from "js-cookie";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import CartItem from "@component/cart/CartItem";
import InputArea from "@component/form/InputArea";
import InputShipping from "@component/form/InputShipping";
import InputPayment from "@component/form/InputPayment";
import useCheckoutSubmit from "@hooks/useCheckoutSubmit";
import AddressService from '@services/AddressService';
import { useRouter } from "next/router";
import ProductServices from "@services/ProductServices";
import Loading from "@component/preloader/Loading";
import OrderServices from "@services/OrderServices";
import { notifyError } from "@utils/toast";

const CheckoutReOrder = () => {
  const {
    // handleSubmit,
    submitHandler,
    handleShippingCost,
    // register,
    // errors,
    showCard,
    setShowCard,
    error,
    stripe,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    taxAmount,
    isCheckoutSubmit,
    isOutOfStock
  } = useCheckoutSubmit();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [addressDetails, setAddressDetails] = useState([]);
  const [address, setAddress] = useState("")
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const refresh = async () => {
    const user = JSON.parse(Cookies.get("userInfo"));
    const addr = await AddressService.getAllAddresses(user._id);
    if (router.query._id) {
      const order = await OrderServices.getOrderById(router.query._id);
      addr.unshift({ address: "Select Address" });
      setAddressDetails(addr);
      let selectedAdress = addr.filter(adr => adr.address === order.address);
      selectAddress(selectedAdress[0]._id);
      setValue("address", selectedAdress[0].address);
      setValue("city", selectedAdress[0].city);
      setValue("zipCode", selectedAdress[0].zip);
      setValue("province", selectedAdress[0].province);
      setValue("paymentMethod", order.paymentMethod);
      setValue("deliveryDate", order.deliveryDate);
      setValue("contact", order.contact);
    }

  }

  const getProducts = async () => {
    setLoading(true);
    const allProducts = await ProductServices.getAllProducts();
    setProducts(allProducts);
    setLoading(false);
  }

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      const fullName = user.name.split(" ");
      setValue("firstName", fullName[0]);
      setValue("lastName", fullName[1] ? fullName[1] : "");
      setValue("email", user.email);
      //setValue("address", user.address);
      //setAddress(address);
      //setValue("contact", user.phone);
      //setValue("city", user.city);
      //setValue("zipCode", user.zipCode);
      //setValue("deliveryDate", user.deliveryDate);
      //setValue("paymentMethod", user.paymentMethod);
    }
    refresh();
    if (items.length > 0) {
      getProducts();
    } else {
      setLoading(false);
    }
  }, []);


  const selectAddress = (addressValue) => {
    setAddress(addressValue);
    let findAddress = addressDetails.filter(item => item._id === addressValue);
    if (findAddress.length > 0) {
      setValue("address", findAddress[0].address);
      setValue("city", findAddress[0].city);
      setValue("zipCode", findAddress[0].zip);
      setValue("province", findAddress[0].province);
    } else {
      setValue("city", "");
      setValue("zipCode", "");
      setValue("province", "Ontario");
    }
  }

  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      01. Personal Details
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="First Name"
                          name="firstName"
                          type="text"
                          placeholder="John"
                        />
                        <Error errorName={errors.firstName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Last name"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                        />
                        <Error errorName={errors.lastName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Email address"
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                        />
                        <Error errorName={errors.email} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Phone number"
                          name="contact"
                          type="text"
                          minLength={10}
                          pattern="\d{10}"
                          placeholder="+1647-12345678"
                        />

                        <Error errorName={errors.contact} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-12">
                    <div className="flex justify-between">
                      <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                        02. Shipping Details
                      </h2>
                      <div>
                        <Link href="/user/addresses">
                          <a className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-green-600">
                            <button
                              // type="submit"
                              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-2 lg:px-3 py-1 md:py-1 lg:py-1 hover:text-white hover:bg-green-600 h-12 text-sm lg:text-sm w-full sm:w-auto"
                            >
                              Add New Address
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6 mt-3">
                        <label htmlFor="address">
                          Select Address
                        </label>
                        <select className="form-select appearance-none
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          mt-2
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                          id="address"
                          value={address}
                          onChange={(e) => selectAddress(e.target.value)}
                        >
                          {addressDetails && addressDetails.map((addr, index) => {
                            return (
                              <option value={addr._id}>{addr.address}</option>
                            )
                          })
                          }
                        </select>
                      </div>
                      {/* <div className="col-span-6">
                        <InputArea
                          register={register}
                          label="Street address"
                          name="address"
                          type="text"
                          placeholder="Toronto City Hall 100 Queen St W"
                        />
                        <Error errorName={errors.address} />
                      </div> */}

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <InputArea
                          register={register}
                          label="City"
                          name="city"
                          type="text"
                          placeholder="Toronto"
                        />
                        <Error errorName={errors.city} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          label="Province"
                          name="province"
                          type="text"
                          defaultValue="Ontario"
                          value="Ontario"
                          disabled={true}
                          placeholder="Ontario"
                        />
                        <Error errorName={errors.province} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label="ZIP / Postal"
                          name="zipCode"
                          type="text"
                          minLength={6}
                          maxLength={6}
                          placeholder="91710"
                        />
                        <Error errorName={errors.zipCode} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label="Delivery Date"
                          name="deliveryDate"
                          type="date"
                          placeholder="dd/mm/yyyy"
                        />
                        <Error errorName={errors.deliveryDate} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-4">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Pickup from Store"
                          value="PickUp"
                          Icon={IoWalletSharp}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-4">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Delivery"
                          value="Delivery"
                          Icon={IoWalletSharp}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>
                    </div>

                    {/*<Label label="Shipping method" />
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="FedEx"
                          time="Today"
                          cost={60}
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="UPS"
                          time="7 Days"
                          cost={20}
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>
                    </div>*/}
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      03. Payment Details
                    </h2>
                    {/*{showCard && (*/}
                    <div className="mb-3">
                      <CardElement />{" "}
                      <p className="text-red-400 text-sm mt-1">{error}</p>
                    </div>
                    {/*)}*/}
                    <div className="grid grid-cols-6 gap-6">
                      {/*<div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Cash On Delivery"
                          value="COD"
                          Icon={IoWalletSharp}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>*/}
                      {/*<div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Pickup from Store"
                          value="COD"
                          Icon={IoWalletSharp}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Credit Card"
                          value="Card"
                          Icon={ImCreditCard}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>*/}
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                    <div className="col-span-6 sm:col-span-3">
                      <Link href="/">
                        <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                          <span className="text-xl mr-2">
                            <IoReturnUpBackOutline />
                          </span>
                          Continue Shopping
                        </a>
                      </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <button
                        type={isEmpty ? "button" : "submit"}
                        disabled={!stripe || isCheckoutSubmit || isOutOfStock || Cookies.get("addToCartStatus") === "Yes"}
                        className="bg-green-500 hover:bg-green-600 border border-green-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                        onClick={() => {
                          if (isEmpty) {
                            notifyError("Please Add Items To Cart!")
                          }
                        }}
                      >
                        Confirm Re-Order{" "}
                        <span className="text-xl ml-2">
                          {" "}
                          <IoArrowForward />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  Order Summary
                </h2>

                <div
                  className={
                    items.length <= 2
                      ? "overflow-y-scroll flex-grow w-full max-h-64 bg-gray-50 block scrollbar-hide"
                      : "overflow-y-scroll flex-grow w-full max-h-64 bg-gray-50 block"
                  }
                >
                  {loading ? <Loading /> : (products.length > 0 && items.length > 0 && items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      updateCoupon={() => {
                        let couponObj =
                          Cookies.get("couponInfo") !== undefined
                            ? JSON.parse(Cookies.get("couponInfo"))
                            : {};
                        if (Object.keys(couponObj).length > 1) {
                          Cookies.remove("couponInfo");
                          window.location.reload();
                        }
                      }}
                      products={products}
                    />
                  )))}

                  {isEmpty && !loading && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-green-500 font-semibold text-5xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                  <form className="w-full">
                    {couponInfo && couponInfo.couponCode ? (
                      <span className="bg-green-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                        {" "}
                        <p className="text-green-600">Coupon Applied </p>{" "}
                        <span className="text-red-500 text-right">
                          {couponInfo.couponCode}
                        </span>
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder="Input your coupon code"
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-green-500 placeholder-gray-500 placeholder-opacity-75"
                        />
                        <button
                          type="button"
                          onClick={handleCouponCode}
                          className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-green-500 h-12 text-sm lg:text-base w-full sm:w-auto"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Subtotal
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    C${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Shipping Cost
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    C${shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Discount{" "}
                  {couponInfo.couponCode
                    ? "(" + couponInfo.couponCode + ")"
                    : ""}
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                    C${discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  Tax
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                    C${taxAmount.toFixed(2)}
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    Total cost
                    <span className="font-serif font-extrabold text-lg">
                      {" "}
                      C${Number(total).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    Coins
                    <span className="font-serif font-extrabold text-lg">
                      {" "}
                      {Number(total).toFixed(1) * 10}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(CheckoutReOrder), { ssr: false });
