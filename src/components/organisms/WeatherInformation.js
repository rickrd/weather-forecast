import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import doRequest from '../../services/request'
import { updateCurrentData, updateForecastData } from '../redux/actions'
import CurrentWeather from '../molecules/CurrentWeather'
import ForecastWeather from '../molecules/ForecastWeather'

const WeatherInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > h3 {
    border-bottom: 1px solid #fff;
    margin-top: 0;
  }
`

const getCurrentData = async props => {
  const data = await doRequest(
    `https://api.openweathermap.org/data/2.5/weather?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&APPID=01460cb31eb2c443498031402b438f94`
  )

  props.dispatch(updateCurrentData(data))

  return data
}

const getForecastData = async props => {
  const data = await doRequest(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&APPID=01460cb31eb2c443498031402b438f94`
  )
  props.dispatch(updateForecastData(data))

  return data
}

const WeatherInformation = props => {
  if (Object.keys(props.currentData.data).length === 0) {
    getCurrentData(props)
  }

  if (Object.keys(props.forecastData.data).length === 0) {
    getForecastData(props)
  }

  return Object.keys(props.currentData.data).length !== 0 &&
    Object.keys(props.forecastData.data).length !== 0 ? (
    <WeatherInformationWrapper>
      <h3>Weather information for {props.currentData.data.name}</h3>
      <CurrentWeather></CurrentWeather>
      <ForecastWeather></ForecastWeather>
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
