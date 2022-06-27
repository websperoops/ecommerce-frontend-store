import React, { useState, useContext, useEffect, } from 'react';
import Image from 'next/image';
//internal import
import Layout from '@layout/Layout';
import useFilter from '@hooks/useFilter';
import Category from '@component/category/Category';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import { UserContext } from '@context/UserContext';
import Loading from '@component/preloader/Loading';
import Cookies from 'js-cookie';
import { FiChevronRight } from 'react-icons/fi'
// import {Link} from 'react-csv/lib/components/Link';
import Link from 'next/link';
import CategoryCarousel from '@component/carousel/CategoryCarousel';
import StickyCart from '@component/cart/StickyCart';

import { useRouter } from "next/router"
import CategoryServices from "@services/CategoryServices";
import useAsync from "@hooks/useAsync";
const Search = ({ products, subcats }) => {
  const router = useRouter();
  const url = router.query;
  const [visibleProduct, setVisibleProduct] = useState(15);
  const { productData, setSortedField } = useFilter(products);
  const { data, error } = useAsync(() => CategoryServices.getAllCategory());
  const { subproductData, } = useFilter(subcats);
  const [category, setCategory] = useState("");
  const [subCategories, setSubcategories] = useState([]);
  const {
    dispatch
  } = useContext(UserContext);
  useEffect(() => {
    if (url.query == undefined && url.category == undefined) {
      if (data.filter(item => item.status === "Show" && item.children.length > 0).length > 0) {
        router.replace("/search?category=" + data.filter(item => item.status === "Show" && item.children.length > 0)[0].children[0].label.toLowerCase()
          .replace("&", "")
          .split(" ")
          .join("-"))
      }
    }
    if (url.query) {
      setSubcategories([]);
      dispatch({ type: "STOP_LOADING" });
      dispatch({ type: "STOP_LOADING_CATEGORY" });
    } else {
      let selectedCategory = data.filter(item => item.categoryName.toLowerCase()
        .replace('&', '')
        .split(' ')
        .join('-') === url.category);
      if (selectedCategory && selectedCategory.length > 0) {
        let childData = data.filter(item => item._id === selectedCategory[0].parentCategory[0]._id)
        if (childData.length > 0) {
          let finalChilds = [];
          childData[0].children.forEach(child => {
            if (data.filter(item => item._id === child._id && item.status === "Show").length > 0) {
              finalChilds.push(child.label);
            }
          })
          setSubcategories(finalChilds);
        }
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "STOP_LOADING_CATEGORY" });
      } else {
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "STOP_LOADING_CATEGORY" });
      }
    }
  }, [data, url]);
  return (
    <Layout title="Search" description="This is search page">
      <StickyCart />
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex">
          <div className="flex w-full">
            <div className="w-full">
              <div className="relative">
                <CategoryCarousel data={data} error={error} />
              </div>
              <nav className="bg-grey-light rounded-md w-full mb-4">
                <ol className="list-reset flex">
                  {subCategories.length > 0 && subCategories.map((subcategory, index) => (
                    <li className={`text-titlecase text-xs p-2 rounded ${index != 0 ? "ml-2 mr-2" : "mr-2"} ${url.category === subcategory
                      .toLowerCase()
                      .replace('&', '')
                      .split(' ')
                      .join('-')
                      ? "bg-green-700 text-white"
                      : ""
                      }`}>
                      <div
                        onClick={() => {
                          router.push("/search?category=" +
                            subcategory.toLowerCase()
                              .replace('&', '')
                              .split(' ')
                              .join('-')
                          );
                          dispatch({ type: "START_LOADING_CATEGORY" });
                        }}
                        className={`text-grey-600 cursor-pointer`}
                      >
                        {subcategory}
                      </div>
                    </li>))}
                </ol>
              </nav>
              {productData.length === 0 ? (
                <div className="text-center align-middle mx-auto p-5 my-5">
                  <Image
                    className="my-4"
                    src="/no-result.svg"
                    alt="no-result"
                    width={400}
                    height={380}
                  />
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                    Sorry, we can not find this product 😞
                  </h2>
                </div>
              ) : (
                <div className="flex justify-between rounded bg-green-700 text-white p-3 my-4">
                  <h6 className="text-sm font-serif">
                    Total{' '}
                    <span className="font-bold">{productData.length}</span>{' '}
                    items Found
                  </h6>
                  {/*<span className="text-sm font-serif">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option className="px-3" value="All" defaultValue hidden>
                        Sort By Price
                      </option>
                      <option className="px-3" value="Low">
                        Low to High
                      </option>
                      <option className="px-3" value="High">
                        High to Low
                      </option>
                    </select>
                  </span>*/}
                </div>
              )}
              {
                Cookies.get("loadingcategory") === "1" ? (
                  <Loading loading={Cookies.get("loadingcategory") === "1"} />) : (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                      {productData?.slice(0, visibleProduct).map((product, i) => (
                        <ProductCard key={i + 1} product={product} data={data} error={error} />
                      ))}
                    </div>
                    {productData.length > visibleProduct && (
                      <button
                        onClick={() => setVisibleProduct((pre) => pre + 10)}
                        className="w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-green-600 h-12 mt-6 text-sm lg:text-sm"
                      >
                        Load More
                      </button>
                    )}
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const { query } = context.query;
  const { category } = context.query;
  const data = await ProductServices.getAllProducts();
  Cookies.set("loading", 1);

  let products = [];
  let subcats = [];
  //service filter with parent category
  //service filter with child category
  if (category) {
    products = data.filter(
      (product) =>
        product.parentCategory.map(cat => cat.label).map(cat => cat.toLowerCase().replace("&", "").split(" ").join("-")).includes(category)
    );
  }

  //search result
  if (query) {
    products = data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.parent.toLowerCase().includes(query.toLowerCase()) ||
      product.parentCategory.map(cat => cat.label).map((cat) => cat.toLowerCase().replace("&", "").split(" ").join("-")).includes(query.toLowerCase())
    );
  }

  return {
    props: {
      products: products.filter(product => product.status === "Show"),
      subcats
    },
  };
};
