import axiosInstance from "../utils/axios";

const post = (data) => {
  return axiosInstance.post("/comments", data)
}

const getListForVariant = (variantId) => {
  return axiosInstance.get('/comments/' + variantId)
}

const destroy = (commentId) => {
  return axiosInstance.delete('/comments/' + commentId)
}
export default {
  post, getListForVariant, destroy
}