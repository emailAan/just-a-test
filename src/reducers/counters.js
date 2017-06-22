import {
    TILES_FETCH_BEGIN,
    TILES_FETCH_ERROR,
    SET_TILES,
    COUNTER_FETCH_BEGIN,
    COUNTER_FETCH_ERROR,
    COUNTER_FETCH_END
} from '../constants/CounterActionTypes'

const initialState = {
  tiles: [],
  isFetching: false
}

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case TILES_FETCH_BEGIN: {
      return { ...state, isFetching: true }
    }
    case TILES_FETCH_ERROR: {
      return { ...state, isFetching: false }
    }
    case SET_TILES: {
      return { ...state, tiles: action.tiles, isFetching: false }
    } case COUNTER_FETCH_BEGIN: {
      return { ...state }
    }
    case COUNTER_FETCH_ERROR: {
      return { ...state }
    }
    case COUNTER_FETCH_END: {
      let newTiles = state.tiles.map(tile => {
        return tile.id === action.tileCounter.id
                    ? { ...tile, count: action.tileCounter.count }
                    : tile
      })

      return { ...state, tiles: newTiles }
    }
    default:
      return state
  }
}

export default reducer
