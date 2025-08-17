import { useState, useEffect} from "react"
const useApi = (apiFunc, autoFetch = false, ...initialArgs) => {
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchApi = async (...args) => {
    try {
      setLoading(true)
      const response = await apiFunc(...args)
      setResponse(response?.data)     
      setData(response?.data?.data);  
      setError(null);
    } catch (error) {
      setError(error)
      alert(error?.response?.data?.errors || error?.response?.data?.message || "Lỗi không xác định!")
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(autoFetch){
      fetchApi(...initialArgs)
    }
  }, [])

  return {
    loading, response, data, error, fetchApi, setData
  }
}

export default useApi