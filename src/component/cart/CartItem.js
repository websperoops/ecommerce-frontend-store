import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Cookies from "js-cookie";

//internal import
import { SidebarContext } from "@context/SidebarContext";
import UserServices from "@services/UserServices";
import CartItemChild from "./CartItemChild";

const CartItem = ({ item, updateCoupon, products = [] }) => {
  const { updateItemQuantity, removeItem, items } = useCart();
  const { closeCartDrawer } = useContext(SidebarContext);


  const updateUserDelete = (id) => {
    removeItem(id);
    let finalItems = items.findIndex(itemm => itemm.id === id);
    let updatedItems = [...items];
    updatedItems.splice(finalItems, 1);
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      if (user._id) {
        let cartItems = [...updatedItems];
        UserServices.updateCart(user._id, { cartItems })
          .then((res) => {
            if (res) {
              console.log(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }


  const updateUserDecrease = (id, quantity) => {
    let finalItems = items.findIndex(itemm => itemm.id === id);
    let finalItemsProducts = products.findIndex(itemm => itemm._id === id);
    let updatedItems = [...items];
    let updatedItemsProducts = [...products];
    if (updatedItemsProducts[finalItemsProducts].quantity >= updatedItems[finalItems].quantity) {
      updatedItems[finalItems].quantity -= 1;
      updateItemQuantity(id, quantity - 1);
      if (Cookies.get("userInfo")) {
        const user = JSON.parse(Cookies.get("userInfo"));
        if (user._id) {
          let cartItems = [...updatedItems];
          UserServices.updateCart(user._id, { cartItems })
            .then((res) => {
              if (res) {
                console.log(res);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }

  const updateUserIncrease = (id, quantity) => {
    let finalItems = items.findIndex(itemm => itemm.id === id);
    let finalItemsProducts = products.findIndex(itemm => itemm._id === id);
    let updatedItems = [...items];
    let updatedItemsProducts = [...products];
    if (updatedItemsProducts[finalItemsProducts].quantity > updatedItems[finalItems].quantity) {
      updatedItems[finalItems].quantity += 1;
      updateItemQuantity(id, quantity + 1);
      if (Cookies.get("userInfo")) {
        const user = JSON.parse(Cookies.get("userInfo"));
        if (user._id) {
          let cartItems = [...updatedItems];
          UserServices.updateCart(user._id, { cartItems })
            .then((res) => {
              if (res) {
                console.log(res);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }

  return (
    <div className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">
      <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4 self-start">
        <Image
          key={item.id}
          src={item.image}
          width={40}
          height={40}
          alt={item.title}
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        {(products.filter(product => product._id == item.id).length > 0 ? products.filter(product => product._id === item.id)[0].quantity : 0) === 0 && (
          <span className="inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
            Sold Out
          </span>
        )}
        <Link href={`/product/${item.slug}`}>
          <a
            onClick={closeCartDrawer}
            className="truncate text-sm font-medium text-gray-700 text-heading line-clamp-1"
          >
            {item.title}
          </a>
        </Link>
        <span className="text-xs text-gray-400 mb-1">
          Item Price C${item.price} (Tax {products.filter(product => product._id == item.id).length > 0 ? products.filter(product => product._id === item.id)[0].tax : 0}%)
        </span>
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm md:text-base text-heading leading-5">
            <span>C${(item.price * item.quantity).toFixed(2)}</span>
          </div>
          <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
            <button
              onClick={() => {
                updateUserDecrease(item.id, item.quantity);
                updateCoupon ? updateCoupon() : null;
              }}
              disabled={Cookies.get("addToCartStatus") === "Yes"}
            >
              <span className="text-dark text-base">
                <FiMinus />
              </span>
            </button>
            <p className="text-sm font-semibold text-dark px-1">
              {item.quantity}
            </p>
            <button
              onClick={() => {
                updateUserIncrease(item.id, item.quantity);
                updateCoupon ? updateCoupon() : null;
              }}
              disabled={Cookies.get("addToCartStatus") === "Yes"}
            >
              <span className="text-dark text-base">
                <FiPlus />
              </span>
            </button>
          </div>
          <button
            onClick={() => {
              updateUserDelete(item.id);
              updateCoupon ? updateCoupon() : null;
            }}
            disabled={Cookies.get("addToCartStatus") === "Yes"}
            className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
