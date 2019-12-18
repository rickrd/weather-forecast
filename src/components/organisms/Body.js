import React from 'react'
import styled from 'styled-components'
import SearchCoordinate from '../molecules/SearchCoordinate'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Body = () => {
  return (
    <BodyWrapper>
      <h3>Weather information</h3>
      <SearchCoordinate></SearchCoordinate>
    </BodyWrapper>
  )
}

export default Body
