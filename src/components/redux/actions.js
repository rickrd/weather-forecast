export const UPDATE_COORDINATES = 'UPDATE_COORDINATES'

export const updateCoordinates = (lat, lon) => {
  return { type: UPDATE_COORDINATES, lat, lon }
}
