import axiosInstance from "../utils/axios";

const getAllActive = () => {
  return axiosInstance.get('/categories');
}

export default {
  getAllActive
}