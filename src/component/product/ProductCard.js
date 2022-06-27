import { useContext, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { IoBagAddSharp, IoAdd, IoRemove } from "react-icons/io5";
import Price from "@component/common/Price";
import Discount from "@component/common/Discount";
import ProductModal from "@component/modal/ProductModal";
import Cookies from "js-cookie";
import UserServices from "@services/UserServices";
import { useRouter } from "next/router";
import { UserContext } from "@context/UserContext";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const ProductCard = ({ product }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [width, height] = useWindowSize();
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { dispatch } = useContext(UserContext);

  const generateCartItem = (p) => {
    const newItem = {
      ...p,
      quantity: 1,
      id: p._id
    };
    addItem(newItem);
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
    <>
      {modalOpen && <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />}
      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div
          onClick={() => {
            if (product.quantity > 0) {
              setModalOpen(!modalOpen);
            }
          }
          }
          className="relative flex justify-center w-full cursor-pointer"
        >
          {product.quantity === 0 && (
            <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
              Sold Out
            </span>
          )}
          <Discount product={product} />
          <Image
            src={product.image}
            width={width <= 480 ? 190 : 160}
            height={width <= 480 ? 120 : 160}
            alt={product.title}
            className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
          />
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2">{product.title}</span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price product={product} card={true} />
            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-green-500 text-white rounded"
                      >
                        <button
                          onClick={() => {
                            updateUserDecrease(item.id, item.quantity)
                          }
                          }
                          disabled={Cookies.get("addToCartStatus") === "Yes"}
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => {
                            updateUserIncrease(item.id, item.quantity)
                          }
                          }
                          disabled={product.quantity === item.quantity || Cookies.get("addToCartStatus") === "Yes"}
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => generateCartItem(product)}
                disabled={product.quantity < 1 || Cookies.get("addToCartStatus") === "Yes"}
                aria-label="cart"
                className={`h-9 w-9 flex items-center justify-center border border-gray-200 rounded ${product.quantity < 1 || Cookies.get("addToCartStatus") === "Yes" ? 'text-gray-200' : 'text-green-500 hover:border-green-500 hover:bg-green-500'} hover:text-white transition-all`}
              >
                {" "}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
