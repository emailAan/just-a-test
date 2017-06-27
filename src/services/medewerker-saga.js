import { call, put, takeEvery, select } from 'redux-saga/effects'

import {fetchMedewerkers} from '../api'
import {setMedewerkers} from '../containers/Medewerkers/actions'
import {MEDEWERKERS_FETCH_BEGIN, MEDEWERKERS_FETCH_ERROR} from '../containers/Medewerkers/constants'
import {getEndPoint} from '../reducers'

function * fetchMedewerkersWorker (action) {
  try {
    let endPoint = yield select(getEndPoint)

    const medewerkers = yield call(fetchMedewerkers, endPoint)

    yield put(setMedewerkers(medewerkers))
  } catch (e) {
    yield put({type: MEDEWERKERS_FETCH_ERROR, message: e.message})
  }
}

function * fetchMedewerkersWatcher () {
  yield takeEvery(MEDEWERKERS_FETCH_BEGIN, fetchMedewerkersWorker)
}

export default fetchMedewerkersWatcher
