import { UPDATE_LON, UPDATE_LAT } from './actions'

const initialState = {
  lat: 0,
  lon: 0
}

const coordinates = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LAT:
      return Object.assign({}, state, {
        lat: action.lat
      })
    case UPDATE_LON:
      return Object.assign({}, state, {
        lon: action.lon
      })
  }
}

export default function reducers(state = initialState, action) {
  return {
    coordinates: coordinates(state, action)
  }
}
