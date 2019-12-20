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

  #current {
    color: blue;
  }

  #max {
    color: red;
  }

  #min {
    color: green;
  }
`

const ForecastWeather = props => {
  const { data } = props.forecastData

  if (Object.keys(data).length === 0) {
    return null
  }

  return data.list.map(forecast => (
    <ForecastWeatherBlock>
      <div id="current">Current: {forecast.main.temp}</div>
      <div id="max">Max: {forecast.main.temp_max}</div>
      <div id="min">Min: {forecast.main.temp_min}</div>
      <div>Humidity: {forecast.main.humidity}</div>
      <div>{forecast.weather.length ? forecast.weather[0].description : ''}</div>
    </ForecastWeatherBlock>
  ))
}

const mapStateToProps = state => {
  return {
    forecastData: state.forecastData
  }
}

export default connect(mapStateToProps)(ForecastWeather)
