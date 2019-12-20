import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import doRequest from '../../services/request'

const WeatherInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

// const FetchInformation = props => {
//   console.log(props)
// }

const WeatherInformation = props => {
  console.log(props)
  return <WeatherInformationWrapper>Weather Information</WeatherInformationWrapper>
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(WeatherInformation)