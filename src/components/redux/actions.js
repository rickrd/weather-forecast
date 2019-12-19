export const UPDATE_LAT = 'UPDATE_LAT'
export const UPDATE_LON = 'UPDATE_LON'

export const updateLat = lat => {
  return { type: UPDATE_LAT, lat }
}

export const updateLon = lon => {
  return { type: UPDATE_LON, lon}
}
