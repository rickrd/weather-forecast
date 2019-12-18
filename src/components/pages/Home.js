import React from 'react'
import Header from '../organisms/Header'
import Body from '../organisms/Body'
import styled from 'styled-components'

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

const showPosition = position => {
  alert('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude)
}

const showError = error => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation.')
      break
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.')
      break
    case error.TIMEOUT:
      alert('The request to get user location timed out.')
      break
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred.')
      break
  }
}

const HomeWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  getLocation()

  return (
    <HomeWrapper>
      <Header></Header>
      <Body></Body>
    </HomeWrapper>
  )
}

export default Home
