import { call, put, takeEvery, select } from 'redux-saga/effects'

import {fetchTiles} from '../api'
import {COUNTER_FETCH_BEGIN, COUNTER_FETCH_ERROR} from '../containers/TileList/constants'
import {getEndPoint} from '../reducers'
import {setTiles} from '../containers/TileList/actions'

function * fetchMedewerkersWorker (action) {
  try {
    let endPoint = yield select(getEndPoint)

    const tiles = yield call(fetchTiles, endPoint)

    yield put(setTiles(tiles))
  } catch (e) {
    yield put({type: COUNTER_FETCH_ERROR, message: e.message})
  }
}

function * fetchMedewerkersWatcher () {
  yield takeEvery(COUNTER_FETCH_BEGIN, fetchMedewerkersWorker)
}

export default fetchMedewerkersWatcher
