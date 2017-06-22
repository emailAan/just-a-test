import request from 'superagent'
import setTiles from '../actions/set-tiles'

const dataService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'TILES_FETCH_BEGIN':
      request
        .get(store.getState().settings.endPoint + '/api/' + 'tiles')
        .end((err, res) => {
          if (err) {
            return next({
              type: 'TILES_FETCH_ERROR',
              err
            })
          }

          const data = JSON.parse(res.text)
          next(setTiles(data))
        })
      break

    default:
      break
  }
}

export default dataService
