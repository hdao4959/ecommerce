import axiosInstance from "../utils/axios";

const getProductDetail = async (slugProductLine, idVariantColor) => {
      const { data } = await axiosInstance.get('/products/' + slugProductLine + '?id=' + idVariantColor);
      return data
}

export default {
  getProductDetail
}