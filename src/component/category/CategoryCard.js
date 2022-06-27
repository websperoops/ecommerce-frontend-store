import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
  IoRemoveSharp,
} from 'react-icons/io5';

//internal import
import { SidebarContext } from '@context/SidebarContext';
import { UserContext } from '@context/UserContext';

const CategoryCard = ({ title, icon, nested, id, categories }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const showCategory = () => setShow(!show);
  const { closeCategoryDrawer } = useContext(SidebarContext);

  const {
    dispatch
  } = useContext(UserContext);

  const handleSubCategory = (title, children) => {
    dispatch({ type: "START_LOADING" })
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    router.push(
      `/search?category=${children.label
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
    closeCategoryDrawer();
  };
  useEffect(() => {
    if (router.query.query) {
      setShow(false);
    }
    let catIds = categories.filter(item => item.children.map(item => item.label.toLowerCase().replace('&', '').split(' ').join('-')).includes(router.query.category));
    if (catIds.length > 0 && catIds[0].categoryName === title) {
      setShow2(true)
    }
  }, [router.query])

  return (
    <>
      <a
        onClick={showCategory}
        className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-green-600"
        role="button"
      >
        <Image
          src={icon}
          width={18}
          height={18}
          alt={title}
          aria-hidden="true"
        />
        <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-green-600">
          {title}
          <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
            {show || show2 ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          </span>
        </div>
      </a>
      {show || show2 ? (
        <ul className="pl-6 pb-3 pt-1 -mt-1">
          {nested.map((children, index) => (
            <li key={index}>
              <a
                onClick={() => handleSubCategory(title, children)}
                className={`flex items-center font-serif py-1 text-sm text-gray-600 hover:text-green-600 cursor-pointer ${router.query?.category?.toLowerCase().replace('&', '').split(' ').join('-') === children.label.toLowerCase().replace('&', '').split(' ').join('-') ? 'text-green-600' : ''}`}
              >
                <span className="text-xs text-gray-500 pr-1">
                  <IoRemoveSharp />
                </span>
                {children.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default CategoryCard;
