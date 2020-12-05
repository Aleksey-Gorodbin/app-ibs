export const setCity = city => ({
  type: 'SET_CITY',
  payload: {
    city
  }
})
export const setCoordinates = (coordinates) => ({
  type: 'SET_COORDINATES',
  payload: {
    coordinates
  }
})
export const setData = (weather) => ({
  type: 'SET_DATA',
  payload: {
    weather
  }
})