export const UPDATE_COORDINATES = 'UPDATE_COORDINATES'
export const UPDATE_CURRENT_DATA = 'UPDATE_CURRENT_DATA'
export const UPDATE_FORECAST_DATA = 'UPDATE_FORECAST_DATA'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

export const updateCoordinates = (lat, lon) => {
  return { type: UPDATE_COORDINATES, lat, lon }
}

export const updateCurrentData = data => {
  return { type: UPDATE_CURRENT_DATA, data }
}

export const updateForecastData = data => {
  return { type: UPDATE_FORECAST_DATA, data }
}

export const updateAddress = address => {
  return { type: UPDATE_ADDRESS, address}
}