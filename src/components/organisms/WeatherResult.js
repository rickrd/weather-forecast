import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import WeatherInformation from './WeatherInformation'

const WeatherResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`

const WeatherResult = props => {
  return props.coordinates.lat !== 0 ? (
    <WeatherResultWrapper>
      <WeatherInformation></WeatherInformation>
    </WeatherResultWrapper>
  ) : (
    <WeatherResultWrapper>
      No results encountered, use your current location or give an address to show the weather
      forecast.
    </WeatherResultWrapper>
  )
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(WeatherResult)
