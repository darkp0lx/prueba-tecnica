import { useEffect, useState } from 'react'
import { useGetData } from './useGetData'

export const useChangeTarget = actualObject => {
  const { newProducts } = useGetData()

  const [targetObject, setTargetObjet] = useState()

  function getTargetObjet (actualObject) {
    newProducts &&
      newProducts.map(el => {
        console.log(el.variantes.talla.value)
        if (actualObject == el.variantes.talla.value) {
          setTargetObjet(el)
        }
      })
  }
  useEffect(() => {
    getTargetObjet(actualObject)
    console.log(targetObject)
  }, [actualObject])
  if (targetObject) {
    return {
      targetObject
    }
  } else {
    return []
  }
}
