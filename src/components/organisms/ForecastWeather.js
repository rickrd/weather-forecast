import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ForecastWeatherBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  color: #000;
  margin-bottom: 10px;
`

const ForecastWeather = props => {
  const { data } = props.forecastData
  return data.list.map(forecast => <ForecastWeatherBlock>{forecast.dt_txt}</ForecastWeatherBlock>)
}

const mapStateToProps = state => {
  return {
    forecastData: state.forecastData
  }
}

export default connect(mapStateToProps)(ForecastWeather)
