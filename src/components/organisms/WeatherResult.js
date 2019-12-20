import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const WeatherResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const WeatherResult = props => {
  console.log(props)
  return props.coordinates.lat != 0 ? (
    <WeatherResultWrapper>Results</WeatherResultWrapper>
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
