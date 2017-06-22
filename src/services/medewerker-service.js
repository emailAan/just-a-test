import request from 'superagent'
import setMedewerkers from '../actions/set-medewerkers'
import {MEDEWERKERS_FETCH_BEGIN, MEDEWERKERS_FETCH_ERROR} from '../constants/MedewerkerActionTypes'

const medewerkerService = store => next => action => {
  next(action)
  switch (action.type) {
    case MEDEWERKERS_FETCH_BEGIN:
      request
                .get(store.getState().settings.endPoint + '/api/' + 'medewerkers')
                .end((err, res) => {
                  if (err) {
                    return next({
                      type: MEDEWERKERS_FETCH_ERROR,
                      err
                    })
                  }

                  const data = JSON.parse(res.text)
                  next(setMedewerkers(data))
                })
      break

    default:
      break
  }
}

export default medewerkerService
