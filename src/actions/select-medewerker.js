import {MEDEWERKER_SELECTED} from '../constants/MedewerkerActionTypes'

const selectMedewerker = (medewerker) => {
  return { type: MEDEWERKER_SELECTED, medewerker }
}

export default selectMedewerker
