import requests from './httpServices';

const OrderServices = {
  addOrderCOD(body, headers) {
    return requests.post('/order/addCOD', body, headers);
  },
  addOrder(body, headers) {
    return requests.post('/order/add', body, headers);
  },
  getOrderByUser(body) {
    return requests.get('/order', body);
  },
  getOrderById(id, body) {
    return requests.get(`/order/${id}`, body);
  },
};

export default OrderServices;
