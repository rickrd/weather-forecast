import React from 'react'
import styled from 'styled-components'

const WeatherResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const WeatherResult = (coordinates = []) => {
  return coordinates.length ? (
    <WeatherResultWrapper></WeatherResultWrapper>
  ) : (
    <WeatherResultWrapper>
      No results encountered, use your current location or give an address to show the weather
      forecast.
    </WeatherResultWrapper>
  )
}

export default WeatherResult
