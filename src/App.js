import React from 'react'
import Home from './components/pages/Home'
import styled from 'styled-components'
import { createStore } from 'redux'
import reducers from './components/redux/reducers'

const store = createStore(reducers)

const AppWrapper = styled.div`
  background-color: #1667af;
`

function App() {
  return (
    <AppWrapper>
      <Home store={store}></Home>
    </AppWrapper>
  )
}

export default App
