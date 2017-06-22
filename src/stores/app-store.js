import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import dataService from '../services/data-service'
import counterService from '../services/counter-service'
import logger from '../services/logger-service'
import medewerkerSaga from '../services/medewerker-saga'
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, dataService, counterService, logger))

sagaMiddleware.run(medewerkerSaga)

export default store
