import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGetData = () => {
  const [data, setData] = useState()
  let newProducts = []

  function getFichaTecnica (item) {
    let arrayFinal = []
    arrayFinal = item.extra_features
    return arrayFinal
  }
  function getAttributes (item) {
    const attributes = {}
    for (let index = 0; index < item.attributes_variants.length; index++) {
      const element = item.attributes_variants[index]
      if (element.name == 'Color') {
        attributes['color'] = {
          id: element.id,
          name: element.name,
          value: element.value
        }
      }
      if (element.name == 'Talla') {
        attributes['talla'] = {
          id: element.id,
          name: element.name,
          value: element.value
        }
      }
    }
    return attributes
  }
  useEffect(() => {
    axios
      .get(
        'https://api.mauiandsons.com.pe/api/v1/products/products-json/bermuda-6b660-m-3/'
      )
      .then(res => setData(res.data))
  }, [])

  if (data) {
    const dataImportant = data?.detail_product?.product?.list
    var lengthData = dataImportant.length
    for (let index = 0; index < lengthData; index++) {
      const element = dataImportant[index]
      const createElement = {
        sku: element?.properties['sku'],
        name: element?.properties['name'],
        price: element?.properties['price'],
        stock: element?.properties['stock'],
        variantes: getAttributes(element),
        ficha_tecnica: getFichaTecnica(element)
      }
      newProducts.push(createElement)
    }
    return { newProducts }
  } else {
    return {}
  }
}
