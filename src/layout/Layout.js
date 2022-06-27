import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

//internal import
import Navbar from '@layout/navbar/Navbar';
import Footer from '@layout/footer/Footer';
import FooterTop from '@layout/footer/FooterTop';
import MobileFooter from '@layout/footer/MobileFooter';
import UserServices from '@services/UserServices';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Layout = ({ title, description, children }) => {
  let getGlobalSettings = async () => {
    const allSettings = await UserServices.addToCartSettings();
    Cookies.set("addToCartStatus", allSettings[0].addToCartStatus);
  }
  useEffect(() => {
    getGlobalSettings();
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="font-sans">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>
            {title
              ? `Restaurant | ${title}`
              : 'Restaurant - React Grocery & Organic Food Store e-commerce Template'}
          </title>
          {description && <meta name="description" content={description} />}
          <link rel="icon" href="/logo/logo1.png" />
        </Head>
        <Navbar />

        <div className="bg-gray-50">{children}</div>
        <MobileFooter />
        <div className="w-full">
          <FooterTop />
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
