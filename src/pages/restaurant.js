import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/solid';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';

const Restaurant = () => {
  const items = [
    {
      title: "Aloo Tikki Chana Chat",
      price: "7.99"
    },
    {
      title: "Pani Puri (6 Pcs)",
      price: "7.99"
    },
    {
      title: "Paneer Pakoda / LB",
      price: "7.99 LB"
    },
    {
      title: "Masala French Fries",
      price: "6.99"
    },
    {
      title: "Samosa Chana (2pc)",
      price: "7.99"
    }
  ]
  return (
    <Layout title="Restaurant" description="This is faq page">
      <PageHeader title="Restaurant" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
          <div className="grid gap-4 lg:mb-8 items-start md:grid-cols-2 xl:grid-cols-2">
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>VEG APPETIZERS</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>NON-VEG APPETIZERS</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>SOUTH INDIAN</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>VEGETARIAN</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>CHICKEN</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>LAMB</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>FISH SPECIAL</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>RICE</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>SWEETS</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <PlusIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500 mr-5`}
                      />
                      <span>BIRYANI</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      {items.map(({ title, price }, index) => (
                        <p className='flex justify-between' key={index}>
                          <b>{title}</b>
                          <b>C${price}</b>
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="pr-5">
              <Image width={620} height={550} src="/side-banner-restaurant.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Restaurant;
