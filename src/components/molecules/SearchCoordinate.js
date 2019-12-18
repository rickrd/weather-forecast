import React from 'react'
import styled from 'styled-components'

const SearchCoordinateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SearchCoordinateForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SearchCoordinate = () => {
  return (
    <SearchCoordinateWrapper>
      <h4>Search for your address coordinate:</h4>
      <SearchCoordinateForm>
        <input></input>
        <button>Sent</button>
      </SearchCoordinateForm>
    </SearchCoordinateWrapper>
  )
}

export default SearchCoordinate
