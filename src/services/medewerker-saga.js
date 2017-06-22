import { call, put, takeEvery, select } from 'redux-saga/effects'
import Api from '../api/Api'
import setMedewerkers from '../actions/set-medewerkers'
import {MEDEWERKERS_FETCH_BEGIN, MEDEWERKERS_FETCH_ERROR} from '../constants/MedewerkerActionTypes'
import {getEndPoint} from '../selectors'

function * fetchMedewerkersWorker (action) {
  try {
    let endPoint = yield select(getEndPoint)

    const medewerkers = yield call(Api.fetchMedewerkers, endPoint)

    yield put(setMedewerkers(medewerkers))
  } catch (e) {
    yield put({type: MEDEWERKERS_FETCH_ERROR, message: e.message})
  }
}

function * fetchMedewerkers () {
  yield takeEvery(MEDEWERKERS_FETCH_BEGIN, fetchMedewerkersWorker)
}

export default fetchMedewerkers
