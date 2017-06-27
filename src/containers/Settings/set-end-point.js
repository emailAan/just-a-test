import {SET_ENDPOINT} from './constants'

const setEndPoint = (endPoint) => {
  return { type: SET_ENDPOINT, endPoint }
}

export default setEndPoint
