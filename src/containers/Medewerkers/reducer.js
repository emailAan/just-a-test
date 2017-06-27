import * as constants from './constants'

const initialState = {
  medewerkers: [],
  searchText: '',
  selectedMedewerker: null
}

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.MEDEWERKERS_FETCH_BEGIN: {
      return { ...state }
    }
    case constants.MEDEWERKERS_FETCH_ERROR: {
      return { ...state }
    }
    case constants.MEDEWERKERS_FETCH_END: {
      return { ...state, medewerkers: action.medewerkers }
    }
    case constants.MEDEWERKER_SET_SEARCH: {
      return { ...state, searchText: action.searchText }
    }
    case constants.MEDEWERKER_SELECTED: {
      return { ...state, selectedMedewerker: action.medewerker }
    }
    default:
      return state
  }
}

export default reducer
