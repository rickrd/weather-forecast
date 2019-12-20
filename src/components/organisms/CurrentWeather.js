import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CurrentWeatherBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  color: #000;
`

const CurrentWeather = props => {
  console.log(props)
  const { data } = props.currentData
  if (Object.keys(data).length === 0) {
    return null
  }

  return (
    <CurrentWeatherBlock>
      <div>Current: {data.main.temp}</div>
      <div>Max: {data.main.temp_max}</div>
      <div>Min: {data.main.temp_min}</div>
      <div>Humidity: {data.main.humidity}</div>
      <div>{data.weather.length ? data.weather[0].description : ''}</div>
    </CurrentWeatherBlock>
  )
}

const mapStateToProps = state => {
  return {
    currentData: state.currentData
  }
}

export default connect(mapStateToProps)(CurrentWeather)
