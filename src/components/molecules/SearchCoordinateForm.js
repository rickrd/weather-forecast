import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateCoordinates, updateCurrentData, updateForecastData } from '../redux/actions'
import doRequest from '../../services/request'
import Autocomplete from '../organisms/Autocomplete'

const SearchCoordinateFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 10px;
      background-color: #fff;
    }
  }
`

const getCoordinates = async props => {
  let addressFound = []

  const addressesArray = localStorage.getItem('addresses')
    ? JSON.parse(localStorage.getItem('addresses'))
    : []

  if (addressesArray.length > 0) {
    addressFound = addressesArray.filter(
      address => address.description.toLowerCase() === props.address.description.toLowerCase()
    )
  }

  if (Object.keys(addressFound).length === 0) {
    const data = await doRequest(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${props.address.description}&key=AIzaSyCvBITg5C4Q4yHpxYwBEk2qnmhmXOVtL5M`
    )

    if (data.status === 'OK') {
      props.dispatch(
        updateCoordinates(
          data.results[0].geometry.location.lat,
          data.results[0].geometry.location.lng
        )
      )

      props.dispatch(updateCurrentData({}))

      props.dispatch(updateForecastData({}))

      addressesArray.push({
        description: props.address.description,
        lat: data.results[0].geometry.location.lat,
        lon: data.results[0].geometry.location.lng
      })

      localStorage.setItem('addresses', JSON.stringify(addressesArray))
    } else alert('Google Maps API could not find any results.')
  } else {
    props.dispatch(updateCoordinates(addressFound[0].lat, addressFound[0].lon))

    props.dispatch(updateCurrentData({}))
    
    props.dispatch(updateForecastData({}))
  }

  return null
}

const handleFormSubmit = (e, props) => {
  e.preventDefault()

  let suggestionFound = []

  const suggestionArray = localStorage.getItem('suggestions')
    ? JSON.parse(localStorage.getItem('suggestions'))
    : []

  if (suggestionArray.length > 0) {
    suggestionFound = suggestionArray.filter(
      suggestion => suggestion.toLowerCase() === props.address.description.toLowerCase()
    )
  }

  if (suggestionFound.length === 0) {
    suggestionArray.push(props.address.description)
    localStorage.setItem('suggestions', JSON.stringify(suggestionArray))
  }

  getCoordinates(props)
}

const SearchCoordinateForm = props => {
  return (
    <SearchCoordinateFormWrapper>
      <form
        onSubmit={e => {
          handleFormSubmit(e, props)
        }}
      >
        <Autocomplete
          suggestions={
            localStorage.getItem('suggestions')
              ? JSON.parse(localStorage.getItem('suggestions'))
              : []
          }
        />
        <button>Send</button>
      </form>
    </SearchCoordinateFormWrapper>
  )
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates,
    address: state.address,
    currentData: state.currentData,
    forecastData: state.forecastData
  }
}

export default connect(mapStateToProps)(SearchCoordinateForm)
