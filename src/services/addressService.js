
import axios from "axios";
import axiosInstance from "../utils/axios";

const getProvinces = () => {
  return axiosInstance.get('/location/provinces')
}

const getDistrictsByProvince = (provinceCode) => {
  return axiosInstance.get('/location/districts?provinceCode=' +  provinceCode )
}

const getWardsByDistrict = (districtCode) => {
  return axiosInstance.get('/location/wards?districtCode=' + districtCode)
}

const reverseGeoCoding = async (address) => {
    const { data } = await axios.get(`https://api.distancematrix.ai/maps/api/geocode/json?address=${address}&key=A5hX52xrEZ8pK2tgkH1EI2gKnpX20bLQNb1qEb6cHfmJJ2zgxApBY7m2rIfMOjdV`)
    return data
  }
export default {
  getProvinces, getDistrictsByProvince, getWardsByDistrict, reverseGeoCoding
}