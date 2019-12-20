export const UPDATE_COORDINATES = 'UPDATE_COORDINATES'
export const UPDATE_DATA = 'UPDATE_DATA'

export const updateCoordinates = (lat, lon) => {
  return { type: UPDATE_COORDINATES, lat, lon }
}

export const updateData = data => {
  return { type: UPDATE_DATA, data }
}
