import React from 'react'
import styled from 'styled-components'
import SearchCoordinate from './SearchCoordinate'
import WeatherResult from './WeatherResult'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
`

const Body = () => {
  return (
    <BodyWrapper>
      <SearchCoordinate></SearchCoordinate>
      <WeatherResult></WeatherResult>
    </BodyWrapper>
  )
}

export default Body
