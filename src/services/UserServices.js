import requests from './httpServices';

const UserServices = {
  userLogin(body) {
    return requests.post('/user/login', body);
  },

  userRegister(body) {
    return requests.post('/user/register', body);
  },

  verifyOTP(body) {
    return requests.post('/user/verifyOTP', body);
  },

  signUpWithProvider(body) {
    return requests.post('/user/signup', body);
  },

  changePassword(body) {
    return requests.post('/user/change-password', body);
  },

  updateUser(id, body) {
    return requests.put(`/user/${id}`, body);
  },

  forgotPassword(body) {
    return requests.post("/user/forgotpassword", body);
  },
  resetpassword(body) {
    return requests.post("/user/resetpassword", body);
  },
  getUserById(id, body) {
    return requests.get(`/user/${id}`, body);
  },
  updateCart(id, body) {
    return requests.put(`/user/updateCart/${id}`, body);
  },
  addToCartSettings() {
    return requests.get(`/admin/getAddToCartSettings`);
  },
};

export default UserServices;
