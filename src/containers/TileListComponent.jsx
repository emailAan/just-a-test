import React from 'react'
import Tile from '../components/Tile.jsx'
import { connect } from 'react-redux'

import openTile from '../actions/open-tile'
import getTileList from '../actions/get-tile-list-from-api'

class TileListComponent extends React.Component {
  render () {
    const {tiles, onClick} = this.props
    return (
      <div>
        {tiles.map((tile, index) => <Tile onClick={onClick} key={index} tile={tile} />)}
      </div>
    )
  }

  componentWillMount () {
    if (this.props.tiles.length === 0) {
      this.props.dataFetch()
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tiles: state.counters.tiles,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (tile) => {
      dispatch(openTile(tile))
    },
    dataFetch: () => {
      dispatch(getTileList())
    }
  }
}

TileListComponent.displayName = 'TileListComponent'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TileListComponent)
