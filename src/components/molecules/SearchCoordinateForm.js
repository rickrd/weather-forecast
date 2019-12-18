import React from 'react'
import styled from 'styled-components'

const SearchCoordinateFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const handleSearchCoordinate = e => {
  e.preventDefault()
  console.log(e.target)
}

const SearchCoordinateForm = () => {
  return (
    <SearchCoordinateFormWrapper>
      <form onSubmit={handleSearchCoordinate}>
        <input></input>
        <button>Sent</button>
      </form>
    </SearchCoordinateFormWrapper>
  )
}

export default SearchCoordinateForm
