import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CurrentWeatherBlock = styled.div`
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

const CurrentWeather = props => {
  const { data } = props.currentData

  if (Object.keys(data).length === 0) {
    return null
  }

  return (
    <CurrentWeatherBlock>
         <div id="date">
        Right now
        </div>
      <div id="current">Current: {data.main.temp+' °C'}</div>
      <div id="max">Max: {data.main.temp_max+' °C'}</div>
      <div id="min">Min: {data.main.temp_min+' °C'}</div>
      <div>Humidity: {data.main.humidity}</div>
      <div>{data.weather.length ? data.weather[0].description : ''}</div>
      <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"></img>
    </CurrentWeatherBlock>
  )
}

const mapStateToProps = state => {
  return {
    currentData: state.currentData
  }
}

export default connect(mapStateToProps)(CurrentWeather)
