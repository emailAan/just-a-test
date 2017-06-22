const getTileCounter = (tileId, tileParams) => {
  return { type: 'COUNTER_FETCH_BEGIN', tileId, tileParams }
}

export default getTileCounter
