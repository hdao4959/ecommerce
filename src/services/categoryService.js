import axiosInstance from "../utils/axios";

const getAllActive = () => {
  return axiosInstance.get('/categories');
}

const getProductsForCategory = (cateId, query) => {
  const arrayQuery = new URLSearchParams(query).toString();
  return axiosInstance.get('/categories/' + cateId + (arrayQuery ? `?${arrayQuery}` : "" ));
}
export default {
  getAllActive, getProductsForCategory
}