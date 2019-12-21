import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateAddress } from '../redux/actions'

const SearchCoordinateFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const handleFormSubmit = e => {
  e.preventDefault()
  console.log(e)
}

const handleInputChange = (e, props) => {
  console.log(props)
  console.log(e.target)
  props.dispatch(updateAddress(e.target.value))
}

const SearchCoordinateForm = props => {
  console.log(props)
  return (
    <SearchCoordinateFormWrapper>
      <form onSubmit={handleFormSubmit}>
        <input
        value={props.address.description}
          onChange={e => {
            handleInputChange(e, props)
          }}
        ></input>
        <button>Sent</button>
      </form>
    </SearchCoordinateFormWrapper>
  )
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates,
    address: state.address
  }
}

export default connect(mapStateToProps)(SearchCoordinateForm)
