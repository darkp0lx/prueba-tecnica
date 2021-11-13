import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export const useGetFeatures = () => {
  const [data, setData] = useState([])
  const [features, setFeatures] = useState()
  useEffect(() => {
    axios
      .get(
        'https://api.mauiandsons.com.pe/api/v1/products/products-json/bermuda-6b660-m-3/'
      )
      .then(res => {
        setData(res.data)
        const features = res.data?.detail_product?.product.attributes
        setFeatures(features)
      })
  }, [])

  return { features }
}
