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
  } else alert('Google Maps API could not find any results.')

  return data
}

const handleFormSubmit = (e, props) => {
  e.preventDefault()

  getCoordinates(props)

  let addressFound = []

  const addressArray = localStorage.getItem('addresses')
    ? JSON.parse(localStorage.getItem('addresses'))
    : []

  if (addressArray.length > 0) {
    addressFound = addressArray.filter(
      address => address.toLowerCase() === props.address.description.toLowerCase()
    )
  }

  if (addressFound.length === 0) {
    addressArray.push(props.address.description)
    localStorage.setItem('addresses', JSON.stringify(addressArray))
  }
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
            localStorage.getItem('addresses') ? JSON.parse(localStorage.getItem('addresses')) : []
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
