import React from 'react'
import styled from 'styled-components'

const SearchCoordinateFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SearchCoordinateForm = () => {
  return (
    <SearchCoordinateFormWrapper>
      <input></input>
      <button>Sent</button>
    </SearchCoordinateFormWrapper>
  )
}

export default SearchCoordinateForm
