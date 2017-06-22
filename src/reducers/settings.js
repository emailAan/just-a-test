import {
    SET_ENDPOINT
} from '../constants/SettingsActionTypes'

const initialState = {
  endPoint: 'http://127.0.0.1:8080'
}

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENDPOINT: {
      return { ...state, endPoint: action.endPoint }
    }
    default:
      return state
  }
}

export default reducer
