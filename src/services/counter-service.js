import request from 'superagent'
import setTileCounter from '../actions/set-tile-counter'

const dataService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'COUNTER_FETCH_BEGIN':
      request
        .get(store.getState().settings.endPoint + '/api/' + `${action.tileId}?params=${action.tileParams}`)
        .end((err, res) => {
          if (err) {
            return next({
              type: 'COUNTER_FETCH_ERROR',
              err
            })
          }

          const data = JSON.parse(res.text)
          next(setTileCounter(data))
        })
      break

    default:
      break
  }
}

export default dataService
