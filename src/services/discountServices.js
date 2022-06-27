import requests from "./httpServices";

const DiscountServices = {
  getAllDiscounts() {
    return requests.get("/discount");
  },
};

export default DiscountServices;
