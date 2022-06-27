import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';

const Faq = () => {
  return (
    <Layout title="FAQ" description="This is faq page">
      <PageHeader title="Frequently Asked Questions" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
          <div className="grid gap-4 lg:mb-8 items-center md:grid-cols-2 xl:grid-cols-2">
            <div className="pr-16">
              <Image width={720} height={550} src="/faq.svg" alt="logo" />
            </div>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>What is Desi Grocers?</span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Desi Grocers is a convenient south asian online grocery website. It lets you order groceries from online and provides fast delivery at your doorstep on time.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>How to change password?</span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Password can be changed when logged in to your account.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>Where can I view recent and previous orders?</span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Recent/Previous order can be viewed in Dashboard--&gt;My Orders section.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>Is there a delivery fee or minimum purchase required?</span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Delivery charges are applicable and may vary based on the location.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>How to register to goceries app?</span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      To register, click on the user icon on top tight corner in the home screen, click on register in the pop up shown.Enter email address and verify the OTP for successful registration. .
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>
                        How to check discounts or offers on products?
                      </span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      We display the latest offers and discounts on products in our home screen.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>How to reorder the previous order?</span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      In the MyOrders section, there will be a "Reorder" option to order the same items again.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>
                        Where can i provide feedback or suggestions regarding my experience with Desi Grocers?
                      </span>
                      <ChevronRightIcon
                        className={`${open ? 'transform rotate-90 text-green-500' : ''
                          } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Any suggestions/feedback can be submitted using the form available in our website. We would love to hear from you.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
