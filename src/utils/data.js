import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
  IoLocationOutline
} from "react-icons/io5";

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: "Offer",
    href: "/offer",
    icon: FiGift,
  },
  {
    title: "Checkout",
    href: "/checkout",
    icon: IoBagCheckOutline,
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: FiHelpCircle,
  },
  {
    title: "About Us",
    href: "/about-us",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
    icon: HiOutlineDocumentText,
  },
  {
    title: "404",
    href: "/404",
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: "Dashboard",
    href: "/user/dashboard",
    icon: IoGridOutline,
  },
  {
    title: "My Orders",
    href: "/user/my-orders",
    icon: IoListOutline,
  },
  {
    title: "Addresses",
    href: "/user/addresses",
    icon: IoLocationOutline
  },
  {
    title: "Update Profile",
    href: "/user/update-profile",
    icon: IoSettingsOutline,
  },
  {
    title: "Change Password",
    href: "/user/change-password",
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: "The Best Quality Products Guaranteed!",
    info: "Over 4000 sqft of Fresh Fruits and Vegetables with over 120+ varities...",
    url: "/search?category=breads",
    image: "/slider/slider-1.jpg",
  },
  {
    id: 2,
    title: "Best Different Type of Grocery Store",
    info: "Save your time and let us help you with all your Grocery needs with...",
    url: "/search?category=fish",
    image: "/slider/slider-2.jpg",
  },
  {
    id: 3,
    title: "Quality Freshness Guaranteed!",
    info: "All covered from fresh vegetables/chicken products etc.,..",
    url: "/search?category=fresh-vegetable",
    image: "/slider/slider-3.jpg",
  },
];

const ctaCardData = [
  {
    id: 1,
    title: "Taste of",
    subTitle: "Fresh & Natural",
    image: "/cta/cta-bg-1.jpg",
    url: "/search?category=fresh-vegetable",
  },
  {
    id: 2,
    title: "Taste of",
    subTitle: "Fish & Meat",
    image: "/cta/cta-bg-2.jpg",
    url: "/search?category=meat",
  },
  {
    id: 3,
    title: "Taste of",
    subTitle: "Bread & Bakery",
    image: "/cta/cta-bg-3.jpg",
    url: "/search?category=breads",
  },
];

const featurePromo = [
  {
    id: 1,
    title: "Free Shipping",
    info: "From C$20.00",
    icon: FiTruck,
    className: "bg-red-100",
  },
  // {
  //   id: 2,
  //   title: 'Support 24/7',
  //   info: 'At Anytime',
  //   icon: FiPhoneCall,
  //   className: 'bg-indigo-100',
  // },
  {
    id: 3,
    title: "Secure Payment",
    info: "Totally Safe",
    icon: FiCreditCard,
    className: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Latest Offer",
    info: "Upto 20% Off",
    icon: FiGift,
    className: "bg-green-100",
  },
];

const contactData = [
  {
    id: 1,
    title: "Email Us",
    info: "",
    icon: FiMail,
    contact: "Contact@DesiGrocersOnline.ca",
    className: "bg-green-100",
  },
  {
    id: 2,
    title: "Call Us",
    info: "",
    icon: FiPhoneCall,
    contact: "+1 905 692 1000",
    className: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Location",
    info: "2070 Rymal Rd E Hannon, ON L0R 1P0",
    icon: FiMapPin,
    contact: "",
    className: "bg-indigo-100",
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  ctaCardData,
  featurePromo,
  contactData,
};
