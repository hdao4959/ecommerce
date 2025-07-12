import axiosInstance from "../utils/axios";

const getProductDetail = async (slugProductLine, idVariantColor) => {
      const { data } = await axiosInstance.get('/products/' + slugProductLine + '?id=' + idVariantColor);
      return data
}

const getListProductForHomePage = () =>{
  return axiosInstance.get('/');
}
export default {
  getListProductForHomePage,getProductDetail
}