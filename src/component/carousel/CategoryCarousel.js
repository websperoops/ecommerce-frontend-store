import React, { useRef, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//internal import
import { UserContext } from "@context/UserContext";

const CategoryCarousel = ({ data, error }) => {
  const router = useRouter();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { dispatch } = useContext(UserContext);
  const [parentCategory, setParentCategory] = useState("")
  useEffect(() => {
    if (router.query.query) {
      setParentCategory("")
    } else {
      let selectedCategory = data.filter(item => item.categoryName.toLowerCase()
        .replace('&', '')
        .split(' ')
        .join('-') === router?.query?.category);
      if (selectedCategory.length > 0) {
        let parentCat = selectedCategory[0].parentCategory.length > 0 ? selectedCategory[0].parentCategory[0].label : "";
        setParentCategory(parentCat)
      }
    }
  }, [router, data])
  return (
    <>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={8}
        navigation={true}
        allowTouchMove={true}
        loop={false}
        breakpoints={{
          // when window width is >= 640px
          375: {
            width: 375,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          414: {
            width: 414,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          660: {
            width: 660,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 6,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 8,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 9,
          },
          1680: {
            width: 1680,
            slidesPerView: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper category-slider my-10"
      >
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : (
          <div>
            {data.filter(item => item.status === "Show" && item.children.length > 0)?.map((category, i) => {
              let finalChilds = [];
              category.children.forEach(child => {
                if (data.filter(item => item._id === child._id && item.status === "Show").length > 0) {
                  finalChilds.push(child.label);
                }
              })
              return (
                <SwiperSlide key={i + 1} className="group" style={{ marginLeft: i === 0 ? -10 : 0 }}>
                  <div
                    onClick={() => {
                      router.push(
                        `/search?category=${finalChilds[0]
                          .toLowerCase()
                          .replace('&', '')
                          .split(' ')
                          .join('-')}`
                      );
                      dispatch({ type: "START_LOADING_CATEGORY" });
                    }
                    }
                    className={`text-center cursor-pointer p-3 rounded-lg items-center justify-center align-middle  ${category.categoryName.toLowerCase()
                      .replace('&', '')
                      .split(' ')
                      .join('-') === parentCategory.toLowerCase()
                        .replace('&', '')
                        .split(' ')
                        .join('-') ? 'bg-green-700' : 'bg-white'}`}
                  >
                    <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
                      <Image
                        src={category.icon}
                        alt={category.categoryName}
                        width={35}
                        height={35}
                      />
                    </div>

                    <h3 className={`categoryHeading text-xs mt-2 text-titlecase font-serif group-hover:text-emerald-500 ${category.categoryName.toLowerCase()
                      .replace('&', '')
                      .split(' ')
                      .join('-') == parentCategory.toLowerCase()
                        .replace('&', '')
                        .split(' ')
                        .join('-') ? 'text-white' : 'text-gray-700'}`}>
                      {category.categoryName}
                    </h3>
                  </div>
                </SwiperSlide>
              )
            })}
          </div>
        )}
        <button ref={prevRef} className="prev">
          <IoChevronBackOutline />
        </button>
        <button ref={nextRef} className="next">
          <IoChevronForward />
        </button>
      </Swiper>
    </>
  );
};

export default React.memo(CategoryCarousel);