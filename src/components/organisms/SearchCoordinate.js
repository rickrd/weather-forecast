import React from 'react'
import styled from 'styled-components'
import SearchCoordinateForm from '../molecules/SearchCoordinateForm'
import { updateCoordinates } from '../redux/actions'
import { connect } from 'react-redux'

const SearchCoordinateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const showError = error => {
  alert(error.message)
}

const getLocation = store => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      store.dispatch(updateCoordinates(position.coords.latitude, position.coords.longitude))
    }, showError)
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

const SearchCoordinate = props => {
  const { lat, lon } = props.coordinates
  console.log(props)
  if (lat == 0 || lon == 0) {
    getLocation(props)
  }
  return (
    <SearchCoordinateWrapper>
      <h4>Search for your address coordinate:</h4>
      <SearchCoordinateForm></SearchCoordinateForm>
    </SearchCoordinateWrapper>
  )
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(SearchCoordinate)
