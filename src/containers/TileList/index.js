import React from 'react'
import Tile from '../../components/Tile'
import { connect } from 'react-redux'

import {openTile, getTileList} from './actions'

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

const mapStateToProps = (state, ownProps) => ({tiles: state.counters.tiles, isFetching: state.isFetching})

const mapDispatchToProps = (dispatch, ownProps) =>
  ({
    onClick (tile) { dispatch(openTile(tile)) },
    dataFetch () { dispatch(getTileList()) }
  })

TileListComponent.displayName = 'TileListComponent'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TileListComponent)
