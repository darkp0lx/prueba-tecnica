import React, { useState } from 'react'
import styled from 'styled-components'
import { useChangeTarget } from '../hooks/useChangeTarget'
import { useGetFeatures } from '../hooks/useGetFeatures'
import { Size } from './Size'
export const Products = () => {
  const { features } = useGetFeatures()
  const [actualObject, setActualObject] = useState()
  const { targetObject } = useChangeTarget(actualObject)

  return (
    <Container>
      <ContainerImage>
        <img src='https://images.unsplash.com/photo-1598522325074-042db73aa4e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80' />
      </ContainerImage>
      <ContainerInfo>
        {targetObject && (
          <>
            <h1>sku:{targetObject.sku}</h1>
            <h2>nombre:{targetObject.name}</h2>
            <h4>color:{targetObject.variantes.color.value}</h4>
            <h4>price:{targetObject.price}</h4>
          </>
        )}
        <h2>talla:{actualObject}</h2>
        <ContainerSizes>
          {features &&
            features[0].values.map(el => (
              <Size
                key={el.value}
                size={el.value}
                actualObject={actualObject}
                setActualObject={setActualObject}
              />
            ))}
        </ContainerSizes>
        <ButtonAddCard>Add to card</ButtonAddCard>
      </ContainerInfo>
    </Container>
  )
}
const Container = styled.div`
  margin: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`
const ContainerInfo = styled.div``
const ContainerSizes = styled.div`
  display: flex;
  gap: 5px;
`
const ContainerImage = styled.div`
  img {
    width: 200px;
    height: 300px;
  }
`
const ButtonAddCard = styled.button`
  margin-top: 2em;
  background: black;
  color: white;
  font-weight: bold;
  border: none;
  height: 40px;
  border-radius: 5px;
  :active {
    transform: scale(0.9);
  }
`
