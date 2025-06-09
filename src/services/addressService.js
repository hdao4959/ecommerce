const getProvinces = async () => {
  const res = await fetch("https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1")
  const {data} = await res.json()
  return data
}

const getDistrictsByProvince = async(idProvince) => {
  const res = await fetch(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${idProvince}&limit=-1`)
  const {data} = await res.json();
  return data
}
const getWardsByDistrict = async(idDistrict) => {
  const res = await fetch(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${idDistrict}&limit=-1`)
  const {data} = await res.json();
  return data
}



export default {
  getProvinces, getDistrictsByProvince, getWardsByDistrict
}