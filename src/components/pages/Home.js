import React from 'react'
import Header from '../organisms/Header'

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

const showPosition = position => {
  alert('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude)
}

const Home = () => {
  getLocation()

  return <Header></Header>
}

export default Home
