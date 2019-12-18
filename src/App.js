import React from 'react'
import Home from './components/pages/Home'
import styled from 'styled-components'

const AppWrapper = styled.div`
  background-color: #1667af;
`

function App() {
  return (
    <AppWrapper>
      <Home></Home>
    </AppWrapper>
  )
}

export default App
