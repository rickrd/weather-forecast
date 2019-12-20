import { UPDATE_COORDINATES, UPDATE_CURRENT_DATA, UPDATE_FORECAST_DATA } from './actions'

const initialState = {
  coordinates: {
    lat: 0,
    lon: 0
  },
  currentData: {
    data: {}
  },
  forecastData: {
    data: {}
  }
}

const coordinates = (state = { lat: 0, lon: 0 }, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES:
      return Object.assign({}, state, {
        lat: action.lat,
        lon: action.lon
      })

    default:
      return state
  }
}

const currentData = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_DATA:
      return Object.assign({}, state, {
        data: action.data
      })

    default:
      return state
  }
}

const forecastData = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORECAST_DATA:
      return Object.assign({}, state, {
        data: action.data
      })

    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    coordinates: coordinates(state.coordinates, action),
    currentData: currentData(state.currentData, action),
    forecastData: forecastData(state.forecastData, action)
  }
}
