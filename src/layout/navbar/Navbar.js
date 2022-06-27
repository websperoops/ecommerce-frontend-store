import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell, FiList } from "react-icons/fi";
import Loading from "@component/preloader/Loading";
import ProductServices from "@services/ProductServices";

//internal import
import NavbarPromo from "@layout/navbar/NavbarPromo";
import { UserContext } from "@context/UserContext";
import LoginModal from "@component/modal/LoginModal";
import CartDrawer from "@component/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import MainModal from "@component/modal/MainModal";
import LoadingModal from "@component/modal/LoadingModal";
import { data } from "autoprefixer";

const Navbar = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const { toggleCartDrawer } = useContext(SidebarContext);
  const [data, setData] = useState([]);

  const { totalItems } = useCart();
  const router = useRouter();

  const autoSuggetion = (name) => {
    handleSubmitSearch(name)
  };
  const {
    state: { userInfo },
    dispatch,
  } = useContext(UserContext);

  const handleSubmitSearch = (searchText) => {
    if (searchText) {
      dispatch({ type: "START_LOADING" });
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
    }
    //else {
    //  router.push(`/home`, null, { scroll: false });
    //  setSearchText("");
    //}
    setShowSearch(!showSearch)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      dispatch({ type: "START_LOADING" });
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
    }
    //else {
    //  router.push(`/home`, null, { scroll: false });
    //  setSearchText("");
    //}
    setShowSearch(!showSearch)
  };

  useEffect(async () => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setImageUrl(user.image);
    }
    const data = await ProductServices.getAllProducts();
    setData(data.map((i) => i.title));
  }, []);

  return (
    <>
      <CartDrawer />
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {Cookies.get("loading") === "1" ? (
        <LoadingModal modalOpen={modalOpen2} setModalOpen={setModalOpen2} />
      ) : null}
      <div className="bg-white sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <Link href="/home">
              <a className="lg:mr-6 xl:mr-6 md:block lg:block">
                <Image
                  width={300}
                  height={82}
                  src="/logo/logonew.jpg"
                  alt="logo"
                />
              </a>
            </Link>
            <div className="hidden md:hidden lg:block w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[650px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className=" w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-green-700 relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="bg-green-700 form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm text-white font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-white"
                        placeholder="Search for products (e.g. fish, apple, oil)"
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-white absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      {Cookies.get("loading") === "1" ? (
                        <Loading loading={Cookies.get("loading") === "1"} />
                      ) : (
                        <IoSearchOutline />
                      )}
                    </button>
                  </form>
                </div>
                {searchText.length > 0 && (
                  <div className="bg-white shadow-inner mx-auto w-full absolute suggetions justify-center" style={{ maxHeight: 500, overflow: "auto", overflowX: "hidden" }}>
                    {data.filter((v, i, a) => a.findIndex(v2 => (v2 === v)) === i).map((i, index) => {
                      if (
                        i.toLowerCase().startsWith(searchText.toLowerCase()) ||
                        (i.split(" ")[1] &&
                          i.split(" ")[1].startsWith(searchText.toLowerCase()))
                      ) {
                        return (
                          <>
                            <IoSearchOutline />
                            <p
                              key={index}
                              className="w-full text-black ml-2 hover:text-green-600"
                              onClick={(e) => {
                                autoSuggetion(i);
                              }}
                            >
                              {i}
                            </p>
                          </>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="md:block lg:hidden w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[650px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <button
                aria-label="Search"
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="outline-none text-xl text-dark absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
              >
                <IoSearchOutline />
              </button>
            </div>

            {showSearch && (
              <div className="md:block lg:hidden w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-green-800 relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="bg-green-600 form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm text-white font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-white"
                        placeholder="Search for restaurants (e.g. biryani's, starters)"
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-white absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      {Cookies.get("loading") === "1" ? (
                        <Loading loading={Cookies.get("loading") === "1"} />
                      ) : (
                        <IoSearchOutline />
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/*<button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
              >
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button>*/}
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-5 text-green-500 text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
              </button>
              {/* Profile dropdown */}
              {userInfo?.name && (
                <Link href="/user/my-orders">
                  <button
                    className="pl-5 pr-5 text-green-500 text-2xl font-bold"
                    aria-label="My Orders"
                    title="My Orders"
                  >
                    <FiList className="w-6 h-6 drop-shadow-xl" />
                  </button>
                </Link>
              )}
              <button
                className="pl-5 text-green-500 text-2xl font-bold"
                aria-label="Login"
              >
                {imageUrl || userInfo?.image ? (
                  <Link href="/user/dashboard">
                    <a className="relative top-1 w-6 h-6">
                      <Image
                        width={29}
                        height={29}
                        src={imageUrl || userInfo?.image}
                        alt="user"
                        className="bg-white rounded-full"
                      />
                    </a>
                  </Link>
                ) : userInfo?.name ? (
                  <Link href="/user/dashboard">
                    <a className="leading-none font-bold font-serif block">
                      {userInfo?.name[0]}
                    </a>
                  </Link>
                ) : (
                  <span onClick={() => setModalOpen(!modalOpen)}>
                    <FiUser className="w-6 h-6 drop-shadow-xl" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
