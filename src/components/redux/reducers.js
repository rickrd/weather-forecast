import { UPDATE_COORDINATES, UPDATE_DATA } from './actions'

const initialState = {
  coordinates: {
    lat: 0,
    lon: 0
  },
  data: {}
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

    case UPDATE_DATA:
      return Object.assign({}, state, {
        data: action.data
      })

    default:
      return state
  }
}

export default coordinates
