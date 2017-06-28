import { SET_ENDPOINT, SET_DEFAULT_PAGE } from './constants'

const initialState = { endPoint: 'http://127.0.0.1:8080', defaultPageIndex: 0 }

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENDPOINT: {
      return { ...state, endPoint: action.endPoint }
    }
    case SET_DEFAULT_PAGE: {
      return { ...state, defaultPageIndex: action.pageIndex }
    }
    default:
      return state
  }
}

export const getEndPoint = (state) => state.endPoint

export default reducer
