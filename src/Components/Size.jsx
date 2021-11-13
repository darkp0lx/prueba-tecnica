import React from 'react'
import styled from 'styled-components'

export const Size = ({ setActualObject, actualObject, size }) => {
  return (
    <ContainerSize
      onClick={() => {
        setActualObject(size)
      }}
    >
      <button className={actualObject == size ? 'true' : false}>{size}</button>
    </ContainerSize>
  )
}

const ContainerSize = styled.div`
  button {
    border: none;
    width: 30px;
    height: 30px;
    &.true {
      background: #696868;
      transition: all 0.5s ease;
    }
  }
`
