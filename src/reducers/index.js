import { combineReducers } from 'redux'
import counters from '../containers/TileList/reducer'
import medewerkers from '../containers/Medewerkers/reducer'
import settings, * as fromSettings from '../containers/Settings/reducer'

const rootReducer = combineReducers({
  counters, medewerkers, settings
})

export default rootReducer

export const getEndPoint = (state) => fromSettings.getEndPoint(state.settings)
