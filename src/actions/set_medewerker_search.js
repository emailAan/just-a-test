import {MEDEWERKER_SET_SEARCH} from '../constants/MedewerkerActionTypes'

const setSearchText = (searchText) => {
  return { type: MEDEWERKER_SET_SEARCH, searchText }
}

export default setSearchText
