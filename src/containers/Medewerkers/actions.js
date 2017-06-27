
import {MEDEWERKERS_FETCH_BEGIN, MEDEWERKERS_FETCH_END, MEDEWERKER_SELECTED, MEDEWERKER_SET_SEARCH} from './constants'

export const getMedewerkersFromApi = () => ({ type: MEDEWERKERS_FETCH_BEGIN })
export const selectMedewerker = (medewerker) => ({ type: MEDEWERKER_SELECTED, medewerker })
export const setSearchText = (searchText) => ({ type: MEDEWERKER_SET_SEARCH, searchText })
export const setMedewerkers = (medewerkers) => ({ type: MEDEWERKERS_FETCH_END, medewerkers })
