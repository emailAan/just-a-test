
import {MEDEWERKERS_FETCH_BEGIN} from '../constants/MedewerkerActionTypes'

const getMedewerkersFromApi = () => {
  return { type: MEDEWERKERS_FETCH_BEGIN }
}

export default getMedewerkersFromApi
