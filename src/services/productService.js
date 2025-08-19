import axiosInstance from "../utils/axios";

const getProductDetail = (slugProductLine, idVariantColor) => {
  return axiosInstance.get('/products/' + slugProductLine + '?id=' + idVariantColor);
}

const getCollectionsForHomePage = () => {
  return axiosInstance.get('/');
}

const search = (params) => {
  return axiosInstance.get('/search' + `?${params}`);
}
export default {
  getCollectionsForHomePage, getProductDetail, search
}