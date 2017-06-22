import {SET_ENDPOINT} from '../constants/SettingsActionTypes'

const setEndPoint = (endPoint) => {
  return { type: SET_ENDPOINT, endPoint }
}

export default setEndPoint
