import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';
import { useCart } from "react-use-cart";

//internal import
import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import { notifyError, notifySuccess } from '@utils/toast';

const removeDuplicates = (arr, field) => {
  return arr.filter((v, i, a) => a.findLastIndex(t => (t[field] === v[field])) === i)
}

const useLoginSubmit = (setModalOpen) => {
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isEmpty, items, addItem, cartTotal, updateItemQuantity } = useCart();


  const submitHandler = ({ name, email, password, otp, confirmpassword = "", emailSignup }) => {
    if (password && confirmpassword) {
      UserServices.resetpassword({ password, token: router.query.id })
        .then((res) => {
          if (res) {
            notifySuccess(res.message);
            router.push(redirect || "/home");
            setModalOpen(false);
          }
        })
        .catch((err) => {
          notifyError("Invalid Token/Account Not Verified");
        });
    } else if (email && !password) {
      UserServices.forgotPassword({ email })
        .then((res) => {
          if (res) {
            notifySuccess(res.message);
            router.push(redirect || "/home");
            setModalOpen(false);
          }
        })
        .catch((err) => {
          notifyError(err ? err.message : err.message);
        });
    } else if (otp) {
      let email = Cookies.get("email") ? JSON.parse(Cookies.get("email")) : "";
      UserServices.verifyOTP({ otp, email })
        .then((res) => {
          if (res) {
            dispatch({
              type: 'USER_LOGIN',
              payload: res,
            });
            Cookies.set('userInfo', JSON.stringify(res));
            notifySuccess(res.message);
            router.push(redirect || '/home');
            setModalOpen(false);
          }
        })
        .catch((err) => {
          notifyError("Please Enter Valid OTP!");
        });
    }
    else if (name) {
      UserServices.userRegister({ name, email, password })
        .then((res) => {
          if (res) {
            notifySuccess(res.status);
            Cookies.set("email", JSON.stringify(email));
            router.push('/user/verifyotp');
            setModalOpen(false);
          }
        })

        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    } else {
      UserServices.userLogin({
        email,
        password,
      })
        .then((res) => {
          if (res) {
            dispatch({ type: 'USER_LOGIN', payload: res });
            console.log(res);
            let response = { address: res.address, email: res.email, emailSignup: res.emailSignup, image: res.image, name: res.name, phone: res.phone, token: res.token, _id: res._id }
            Cookies.set('userInfo', JSON.stringify(response));
            let itemIds = items.map(item => item._id);
            let cartIds = res.cart.map(item => item._id);
            let duplicateItems = [...res.cart.filter(item => itemIds.includes(item.id)), ...items.filter(item => cartIds.includes(item.id))];
            let nonDuplicateItems = [...res.cart.filter(item => !itemIds.includes(item.id)), ...items.filter(item => !cartIds.includes(item.id))]
            let combineQuantities = duplicateItems.map(item => {
              let itemQuantity = items.filter(itemm => itemm._id === item._id)[0].quantity;
              return { ...item, quantity: item.quantity + itemQuantity }
            });
            let cartItems = [...combineQuantities, ...nonDuplicateItems];
            let uniqueCartItems = removeDuplicates(cartItems, "_id");
            if (uniqueCartItems.length > 0) {
              uniqueCartItems.forEach((item, index) => {
                if (itemIds.includes(item.id)) {
                  updateItemQuantity(item.id, item.quantity)
                } else {
                  const newItem = {
                    ...item,
                    id: item.id,
                  };
                  addItem(newItem, item.quantity);
                }
              });
            }
            if (uniqueCartItems.length > 0) {
              UserServices.updateCart(res._id, { cartItems: uniqueCartItems })
                .then((res) => {
                  if (res) {
                    console.log(res);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            router.push(redirect || '/home');
            notifySuccess('Login Success!');
            setModalOpen(false);
          }
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    }
  };

  const handleGoogleSignIn = (user) => {
    if (user) {
      UserServices.signUpWithProvider({
        name: user.profileObj.name,
        email: user.profileObj.email,
        image: user.profileObj.imageUrl,
      })
        .then((res) => {
          if (res) {
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('userInfo', JSON.stringify(res));
            notifySuccess('Login success!');
            router.push(redirect || '/home');
            setModalOpen(false);
          }
        })

        .catch((err) => {
          notifyError(err.message);
          setModalOpen(false);
        });
    }
  };

  return {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    register,
    errors,
    GoogleLogin,
  };
};

export default useLoginSubmit;
