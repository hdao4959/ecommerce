import { createContext, useMemo, useState } from "react"
import { useSelector } from "react-redux";

export const FormContext = createContext()
const FormProvider = ({ children }) => {
  const { items } = useSelector(state => state.checkout);
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    provinceCode: '',
    provinceName: '',
    districtCode: '',
    districtName: '',
    wardCode: '',
    wardName: '',
    addressDetail: '',
    note: '',
    items: items,
  });
  const value = useMemo(() => ({form, setForm}), [form, items])
  return <FormContext.Provider value={value}>
    {children}
  </FormContext.Provider>
}
export default FormProvider