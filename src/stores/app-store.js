import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import throttle from 'lodash/throttle'

import logger from '../services/logger-service'
import { rootSaga } from '../services'
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware, logger))

store.subscribe(throttle(() => saveState(store.getState()), 1000))

sagaMiddleware.run(rootSaga)

export default store
