import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ForecastWeatherBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  color: #000;
  margin-bottom: 10px;

  @media (min-width: 640px) {
    flex-direction: row;
  }

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
    <ForecastWeatherBlock key={forecast.dt}>
      <div id="date">
        <div>{forecast.dt_txt.split(" ")[0]}</div>
        <div>{forecast.dt_txt.split(" ")[1]}</div>
        </div>
      <div id="current">Current: {forecast.main.temp+' °C'}</div>
      <div id="max">Max: {forecast.main.temp_max+' °C'}</div>
      <div id="min">Min: {forecast.main.temp_min+' °C'}</div>
      <div>Humidity: {forecast.main.humidity}</div>
      <div>{forecast.weather.length ? forecast.weather[0].description : ''}</div>
      <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="weather icon"></img>
    </ForecastWeatherBlock>
  ))
}

const mapStateToProps = state => {
  return {
    forecastData: state.forecastData
  }
}

export default connect(mapStateToProps)(ForecastWeather)
