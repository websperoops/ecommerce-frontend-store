import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

//internal import
import useAsync from '@hooks/useAsync';
import CategoryServices from '@services/CategoryServices';
import { UserContext } from "@context/UserContext";

const FeatureCategory = () => {
  const router = useRouter();
  const { data, error } = useAsync(() => CategoryServices.getAllCategory());

  const {
    state: { userInfo },
    dispatch,
  } = useContext(UserContext);

  return (
    <>
      {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6">
          {data.filter(item => item.status === "Show" && item.children.length > 0)?.map((item, i) => {
            let finalChilds = [];
            item.children.forEach(child => {
              if (data.filter(item => item._id === child._id && item.status === "Show").length > 0) {
                finalChilds.push(child.label);
              }
            })
            return (
              <li className="group" key={i + 1}>
                <div
                  onClick={() => {
                    router.push(
                      `/search?category=${finalChilds[0]
                        .toLowerCase()
                        .replace('&', '')
                        .split(' ')
                        .join('-')}`
                    );
                    dispatch({ type: "START_LOADING" });
                  }
                  }
                  className="border border-gray-100 bg-white rounded-lg p-4 block cursor-pointer transition duration-200 ease-linear transform group-hover:scale-105"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.icon}
                      alt={item.categoryName}
                      width={35}
                      height={35}
                    />
                    <h3 className="pl-3 lg:pl-4 text-sm text-gray-600 font-serif font-medium leading-tight">
                      {item.categoryName}
                    </h3>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
