import React from 'react'
import styled from 'styled-components'
import SearchCoordinateForm from '../molecules/SearchCoordinateForm'

const SearchCoordinateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SearchCoordinate = () => {
  return (
    <SearchCoordinateWrapper>
      <h4>Search for your address coordinate:</h4>
      <SearchCoordinateForm></SearchCoordinateForm>
    </SearchCoordinateWrapper>
  )
}

export default SearchCoordinate
