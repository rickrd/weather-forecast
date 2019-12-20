import React from 'react'
import Header from '../organisms/Header'
import Body from '../organisms/Body'
import styled from 'styled-components'
import { Provider, connect } from 'react-redux'

const HomeWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Home = props => {
  const {store} = props
  return (
    <Provider store={store}>
      <HomeWrapper>
        <Header></Header>
        <Body></Body>
      </HomeWrapper>
    </Provider>
  )
}

function mapStateToProps(state) {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(Home)
