import axiosInstance from "../utils/axios";

const getProductDetail = (slugProductLine, idVariantColor) => {
  return axiosInstance.get('/products/' + slugProductLine + '?id=' + idVariantColor);
}

const getListProductForHomePage = () => {
  return axiosInstance.get('/');
}

const search = (params) => {
  return axiosInstance.get('/search' + `?${params}`);
}
export default {
  getListProductForHomePage, getProductDetail, search
}