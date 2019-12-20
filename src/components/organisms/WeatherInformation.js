import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import doRequest from '../../services/request'
import { updateCurrentData } from '../redux/actions'
import CurrentWeather from './CurrentWeather'

const WeatherInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  console.log(data)

  return Object.keys(data).length !== 0 ? (
    <WeatherInformationWrapper>
      <h3>Weather information for {data.name}</h3>

      <CurrentWeather></CurrentWeather>
    </WeatherInformationWrapper>
  ) : (
    <WeatherInformationWrapper>Loading</WeatherInformationWrapper>
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
