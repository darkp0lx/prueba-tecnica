import styled from 'styled-components'
import { Products } from './Components/Products'
function App () {
  return (
    <div className='App'>
      <Container className='App-header'>
        <Products />
      </Container>
    </div>
  )
}

export default App

const Container = styled.div``
