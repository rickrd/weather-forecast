import React from 'react'
import { connect } from 'react-redux'

const CurrentWeather = props => {
  console.log(props)
  const {data } = props.currentData
  if (Object.keys(data).length === 0) {
    return null
  }
  
  return (
    <ul>
      <li>{data.name}</li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    currentData: state.currentData
  }
}

export default connect(mapStateToProps)(CurrentWeather)
