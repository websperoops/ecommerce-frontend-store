import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "react-use-cart";

import MainModal from "@component/modal/MainModal";
import Tags from "@component/common/Tags";
import Stock from "@component/common/Stock";
import Price from "@component/common/Price";
import { notifySuccess } from "@utils/toast";
import useCheckoutSubmit from "@hooks/useCheckoutSubmit";
import { IoClose } from 'react-icons/io5';
import UserServices from "@services/UserServices";
import Cookies from "js-cookie";

const ProductModal = ({ modalOpen, setModalOpen, product }) => {
  const { updateItemQuantity, removeItem, addItem } = useCart();
  const [readMore, setReadMore] = useState(false);
  const { items } = useCheckoutSubmit();
  const item = items.filter((e) => e._id === product._id);
  const handleAddItem = () => {
    const newItem = {
      ...product,
      quantity: 1,
      id: product._id,
      parentId: ""
    };
    addItem(newItem);
    notifySuccess(`Added "${product.title}" To Cart!`);
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      if (user._id) {
        let cartItems = [...items, newItem];
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
  };

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
    let updatedItems = [...items];
    if (product.quantity >= updatedItems[finalItems].quantity) {
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
    let updatedItems = [...items];
    if (product.quantity > updatedItems[finalItems].quantity) {
      let updatedItems = [...items];
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
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <button
          onClick={() => setModalOpen(false)}
          type="button"
          className="closeButton inline-flex justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          <IoClose />
        </button>
        <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
          <Link href={`/product/${product.slug}`} passHref>
            <div
              onClick={() => setModalOpen(false)}
              className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer"
            >
              <Image
                src={product.image}
                width={420}
                height={420}
                alt={product.title}
              />
            </div>
          </Link>

          <div className="w-full flex flex-col p-5 md:p-8 text-left">
            <div className="mb-2 md:mb-2.5 block -mt-1.5">
              <Link href={`/product/${product.slug}`} passHref>
                <h1
                  onClick={() => setModalOpen(false)}
                  className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif hover:text-black cursor-pointer"
                >
                  {product.title}
                </h1>
              </Link>

              <Stock product={product} />
            </div>
            <p className="text-sm leading-6 text-gray-500 md:leading-7">
              {product.description.length > 150 ? product.description.substring(0, readMore ? product.description.length - 1 : 150) : product.description} <button className="border-0 text-green-700 font-semibold" onClick={() => setReadMore(!readMore)}>{product.description.length > 150 ? (readMore ? "...less" : "...more") : null}</button>
            </p>
            <div className="flex items-center mt-4">
              <Price product={product} />
            </div>

            <div className="flex items-center mt-4">
              <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                {item.length === 1 ? (
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                      <button
                        onClick={() => {
                          updateUserDecrease(item[0]._id, item[0].quantity);
                        }}
                        disabled={Cookies.get("addToCartStatus") === "Yes"}
                      >
                        <span className="text-dark text-base">
                          <FiMinus />
                        </span>
                      </button>
                      <p className="text-sm font-semibold text-dark px-1">
                        {item[0].quantity}
                      </p>
                      <button
                        onClick={() => {
                          updateUserIncrease(item[0]._id, item[0].quantity);
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
                        updateUserDelete(item[0]._id);
                      }}
                      disabled={Cookies.get("addToCartStatus") === "Yes"}
                      className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAddItem}
                    disabled={product.quantity < 1 || Cookies.get("addToCartStatus") === "Yes"}
                    className={`leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-6 hover:text-white hover:bg-green-600 h-12 text-sm lg:text-base w-full sm:w-auto ${product.quantity < 1 || Cookies.get("addToCartStatus") === "Yes" ? 'bg-gray-300 hover:bg-gray-300 cursor-normal' : ''}`}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
            {/*<div className="flex flex-col mt-4">
              <span className="font-serif font-semibold py-1 text-sm d-block">
                <span className="text-gray-700">Category:</span>{" "}
                <span className="text-gray-500">{product.children}</span>
              </span>
              <Tags product={product} />
            </div>*/}
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default React.memo(ProductModal);
