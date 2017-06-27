import * as constants from './constants'

export const getTileCounter = (tileId, tileParams) => ({ type: constants.COUNTER_FETCH_BEGIN, tileId, tileParams })

export const getTileList = () => ({ type: constants.COUNTER_FETCH_BEGIN })

export const openTile = (tile) => ({ type: constants.OPEN_TILE, payload: tile })

export const setTileCounter = (tileCounter) => ({ type: constants.COUNTER_FETCH_END, tileCounter })

export const setTiles = (tiles) => ({ type: constants.SET_TILES, tiles })
