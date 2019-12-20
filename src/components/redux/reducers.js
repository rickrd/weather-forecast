import { UPDATE_COORDINATES } from './actions'

const initialState = {
  coordinates: {
    lat: 0,
    lon: 0
  }
}

const coordinates = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES:
      return Object.assign({}, state, {
        coordinates: {
          lat: action.lat,
          lon: action.lon
        }
      })
    default:
      return state
  }
}

export default coordinates
