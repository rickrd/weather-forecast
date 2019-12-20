import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import doRequest from '../../services/request'
import { updateCurrentData } from '../redux/actions'

const WeatherInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const getCurrentData = async props => {
  const data = await doRequest(
    `https://api.openweathermap.org/data/2.5/weather?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&APPID=01460cb31eb2c443498031402b438f94`
  )

  props.dispatch(updateCurrentData(data))

  return data
}

const WeatherInformation = props => {
  const { data } = props.currentData
  
  if (Object.keys(data).length === 0) {
    getCurrentData(props)
  }

  return Object.keys(data).length !== 0 ? (
    <WeatherInformationWrapper>{data.name}</WeatherInformationWrapper>
  ) : (
    <WeatherInformationWrapper>No results</WeatherInformationWrapper>
  )
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates,
    currentData: state.currentData,
    forecastData: state.forecastData
  }
}

export default connect(mapStateToProps)(WeatherInformation)
