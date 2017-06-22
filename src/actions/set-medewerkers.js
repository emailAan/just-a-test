import { MEDEWERKERS_FETCH_END } from '../constants/MedewerkerActionTypes'
const setMedewerkers = (medewerkers) => {
  return { type: MEDEWERKERS_FETCH_END, medewerkers }
}

export default setMedewerkers
