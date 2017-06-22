import { combineReducers } from 'redux'
import counters from './counters'
import medewerkers from './medewerkers'
import settings from './settings'

export default combineReducers({
  counters, medewerkers, settings
})
