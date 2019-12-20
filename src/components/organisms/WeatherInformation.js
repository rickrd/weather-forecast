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

const FetchInformation = props => {
  console.log(props)
  const weather = doRequest(`http://api.openweathermap.org/data/2.5/weather?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&APPID=01460cb31eb2c443498031402b438f94`)
  console.log(weather)
  return (
    <div>Results</div>
  )
}

const WeatherInformation = props => {
  console.log(props)
  return <WeatherInformationWrapper><FetchInformation {...props}></FetchInformation></WeatherInformationWrapper>
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(WeatherInformation)