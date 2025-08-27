import { useContext, useState, useEffect } from "react"
import { FormContext } from "../../contexts/CheckoutProviders/FormProvider"
import { generateReCaptcha, sendOTP, verifyOTP } from '../../utils/firebase.js';
import { ProvincesContext } from "../../contexts/CheckoutProviders/ProvincesProvider";
import { DistrictsContext } from "../../contexts/CheckoutProviders/DistrictsProvider";
import { WardsContext } from "../../contexts/CheckoutProviders/WardsProvider.jsx";
import useApi from '../../hooks/useApi.js'
import addressService from "../../services/addressService.js";
import MapCheckout from "../../components/Map/MapCheckout"
import axios from "axios";
import { MarkerContext } from "../../contexts/CheckoutProviders/MarkerProvider.jsx";

const FormFields = () => {
  const { data: dataProvinces, fetchApi: fetchProvinces } = useApi(addressService.getProvinces)
  const { data: dataDistricts, fetchApi: fetchDistricts } = useApi(addressService.getDistrictsByProvince)
  const { data: dataWards, fetchApi: fetchWards } = useApi(addressService.getWardsByDistrict)
  const { provinces, setProvinces } = useContext(ProvincesContext)
  const { districts, setDistricts } = useContext(DistrictsContext)
  const { wards, setWards } = useContext(WardsContext)
  const { form, setForm } = useContext(FormContext)
  const {marker, setMarker} = useContext(MarkerContext)
  const [otp, setOtp] = useState("")
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState(false);

  useEffect(() => {
    fetchProvinces()
  }, [])


  useEffect(() => {
    if (dataProvinces?.provinces) {
      setProvinces(dataProvinces.provinces)
    }
  }, [dataProvinces])

  useEffect(() => {
    if (dataDistricts?.districts) {
      setDistricts(dataDistricts.districts)
    }
  }, [dataDistricts])

  useEffect(() => {
    if (dataWards?.wards) {
      setWards(dataWards.wards)
    }
  }, [dataWards])


  const sendOtp = async () => {
    if (!form?.phoneNumber) {
      alert("Bạn chưa nhập số điện thoại")
      return
    }
    if (!window.recaptchaVerifier) generateReCaptcha();
    setIsModalOpen(true);
    setIsLoadingOTP(true);
    try {
      const result = await sendOTP(form.phoneNumber);
      setConfirmationResult(result);
    } catch (err) {
      alert("Không gửi được OTP");
      setIsModalOpen(false);    // đóng modal nếu lỗi
    } finally {
      setIsLoadingOTP(false);   // tắt loading
    }
  }

  const verifyOtp = async () => {
    if (!otp) {
      alert("Bạn chưa nhập otp")
      return
    }
    const token = await verifyOTP(confirmationResult, otp)
    setForm(prev => ({
      ...prev,
      firebaseToken: token
    }))
    setIsModalOpen(false)
    setOtp('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => {
      const updated = { ...prev, [name]: value };
      if (name === "phoneNumber") {
        delete updated.firebaseToken;
      }
      return updated;
    });

    switch (name) {
      case 'provinceCode': {
        const provinceName = provinces?.find(item => item?.code === parseInt(value))?.name || ''
        setForm(prev => ({
          ...prev,
          districtName: '',
          wardName: '',
          provinceName
        }))

        setDistricts([]);
        setWards([]);
        fetchDistricts(value)
        break;
      }
      case 'districtCode': {
        const districtName = districts?.find(item => item?.code === parseInt(value))?.name || ''
        setForm(prev => ({
          ...prev,
          districtName,
          wardName: '',
        }))
        setWards([]);
        fetchWards(value)
        break;
      }
      case 'wardCode': {
        const wardName = wards?.find(item => item?.code === parseInt(value))?.name || ''
        setForm(prev => ({
          ...prev,
          wardName,
        }))
        break;
      }
    }
  };


  const findAddressOnMap = () => {
    if (!form?.provinceName || !form?.districtName || !form?.wardName || !form?.addressDetail) {
      alert('Bạn chưa nhập đủ thông tin vị trí')
      return
    }
    const formatAddress = [form.addressDetail, form.wardName, form.districtName, form.provinceName].join(', ')
    try {
      (async () => {
        const data = await addressService.reverseGeoCoding(formatAddress)
        const latlng = data?.result[0]?.geometry?.location
        if(latlng){
          setMarker(latlng)
        }else{
          alert("Không thể xác định được vị trí")
        }
      })()
    } catch (error) {
      alert("Có lỗi xảy ra")
    }
  }


  return (
    <div className="my-2">
      <h2 className='mb-4'>Thông tin đặt hàng</h2>
      <form className='mb-5'>
        <div className='mb-3'>
          <label className='form-label'>Họ và tên *</label>
          <input type='text' className='form-control' name='name' placeholder='Họ và tên'
            value={form.name} onChange={handleChange} required />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Số điện thoại *</label>
          <div className='row row-cols-2 g-0'>
            <div className='flex-fill'>
              <input type='text' className='form-control' name='phoneNumber' placeholder='Số điện thoại'
                value={form.phoneNumber} onChange={handleChange} required />
            </div>
            <button disabled={form?.firebaseToken} type="button" className="btn btn-secondary col-3" onClick={sendOtp}>
              Gửi OTP
            </button>
          </div>
        </div>
        <div id="recaptcha-container"></div>

        {isModalOpen && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Xác thực OTP</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsModalOpen(false)}
                  />
                </div>

                <div className="modal-body">
                  {isLoadingOTP ? (
                    <p>Đang gửi OTP, vui lòng chờ...</p>
                  ) : confirmationResult ? (
                    <>
                      <label className="form-label">Nhập OTP</label>
                      <input
                        type="text"
                        className="form-control"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </>
                  ) : (
                    <p>Không thể gửi OTP</p>
                  )}
                </div>

                <div className="modal-footer">
                  {!isLoadingOTP && confirmationResult && (
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={verifyOtp}
                    >
                      Xác thực OTP
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}



        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type='email' className='form-control' name='email' placeholder='Email'
            value={form.email} onChange={handleChange} />
        </div>


        <div className='mb-3 row row-cols-2 row-cols-md-4' >
          <div className='col'>
            <label className='form-label'>Thành phố *</label>
            <select className='form-control' name="provinceCode" id="" value={form.province} onChange={handleChange} >
              <option value="">--Chọn Thành phố--</option>
              {
                provinces && provinces.length > 0 && provinces.map(province => (
                  <option key={province.code} value={province.code}>{province.name}</option>
                ))
              }
            </select>
          </div>
          <div className='col'>
            <label className='form-label'>Quận/huyện *</label>
            <select className='form-control' name="districtCode" id="" value={form.district} onChange={handleChange}>
              <option value="">--Chọn Quận/Huyện</option>
              {
                districts && districts.length > 0 && districts.map(district => (
                  <option key={district.code} value={district.code}>{district.name}</option>
                ))
              }
            </select>
          </div>
          <div className='col'>
            <label className='form-label'>Phường/Thị xã *</label>
            <select className='form-control' name="wardCode" id="" value={form.ward} onChange={handleChange}>
              <option value="">--Chọn Phường/Thị xã</option>
              {wards && wards.length > 0 && wards.map(ward => (
                <option key={ward.code} value={ward.code}>{ward.name}</option>
              ))}
            </select>
          </div>
          <div className='col'>
            <label className='form-label'>Địa chỉ cụ thể</label>
            <input type="text" placeholder="Số nhà/Đường" className="form-control" name="addressDetail" onChange={handleChange} />
          </div>

        </div>
        <div className="my-2">
          <button type="button" onClick={findAddressOnMap} className="btn btn-sm btn-primary"><i className="fa-solid fa-location-crosshairs"></i> Xác nhận địa chỉ</button>
        </div>
        <MapCheckout />
        <div className='mb-3'>
          <label className='form-label'>Ghi chú</label>
          <textarea style={{ width: "100%", height: "100px" }} className='form-control' name="note" onChange={handleChange} id=""></textarea>
        </div>
      </form>
    </div>
  )
}
export default FormFields