import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
  shippingAddress: Cookies.get('shippingAddress')
    ? JSON.parse(Cookies.get('shippingAddress'))
    : {},
  couponInfo: Cookies.get('couponInfo')
    ? JSON.parse(Cookies.get('couponInfo'))
    : {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };

    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
      };

    case 'SAVE_SHIPPING_ADDRESS':
      return { ...state, shippingAddress: action.payload };

    case 'SAVE_COUPON':
      return { ...state, couponInfo: action.payload };

    case 'START_LOADING': {
      Cookies.set("loading", 1);
      return { ...state };
    }

    case 'STOP_LOADING': {
      Cookies.set("loading", 0);
      return { ...state };
    }

    case 'START_LOADING_CATEGORY': {
      Cookies.set("loadingcategory", 1);
      return { ...state };
    }

    case 'STOP_LOADING_CATEGORY': {
      Cookies.set("loadingcategory", 0);
      return { ...state };
    }
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
