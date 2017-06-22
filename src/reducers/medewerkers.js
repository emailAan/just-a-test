import {
    MEDEWERKERS_FETCH_END,
    MEDEWERKERS_FETCH_BEGIN,
    MEDEWERKERS_FETCH_ERROR,
    MEDEWERKER_SET_SEARCH,
    MEDEWERKER_SELECTED
} from '../constants/MedewerkerActionTypes'

const initialState = {
  medewerkers: [],
  searchText: '',
  selectedMedewerker: null
}

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case MEDEWERKERS_FETCH_BEGIN: {
      return { ...state }
    }
    case MEDEWERKERS_FETCH_ERROR: {
      return { ...state }
    }
    case MEDEWERKERS_FETCH_END: {
      return { ...state, medewerkers: action.medewerkers }
    }
    case MEDEWERKER_SET_SEARCH: {
      return { ...state, searchText: action.searchText }
    }
    case MEDEWERKER_SELECTED: {
      return { ...state, selectedMedewerker: action.medewerker }
    }
    default:
      return state
  }
}

export default reducer
