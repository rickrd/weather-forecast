import React from 'react'
import styled from 'styled-components'
import SearchCoordinate from './SearchCoordinate'
import WeatherResult from './WeatherResult'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`

const Body = () => {
  return (
    <BodyWrapper>
      <h3>Weather information</h3>
      <SearchCoordinate></SearchCoordinate>
      <WeatherResult></WeatherResult>
    </BodyWrapper>
  )
}

export default Body
