import { all, fork } from 'redux-saga/effects'

import medewerkerSaga from './medewerker-saga'
import tileSaga from './tile-saga'

export function * rootSaga () {
  yield all([
    fork(medewerkerSaga),
    fork(tileSaga)
  ])
}
