import requests from "./httpServices";

const AddressService = {
  createAddress(body) {
    return requests.post('/address/createAddress', body);
  },
  getAllAddresses(id) {
    return requests.get(`/address/getAllAddresses/${id}`);
  },
  deleteAddress(id) {
    return requests.delete(`/address/deleteAddress/${id}`);
  },
  updateAddress(id, body) {
    return requests.put(`/address/updateAddress/${id}`, body);
  }
}

export default AddressService;