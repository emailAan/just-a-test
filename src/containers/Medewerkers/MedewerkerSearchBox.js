import React from 'react'
import { connect } from 'react-redux'

import { setSearchText } from './actions'
import Input from '../../components/Input'

class MedewerkerSearchBox extends React.Component {
  onChangeHandler = (e) => this.props.search(e.target.value)

  render () {
    return <Input value={this.props.searchText}
      placeholder='zoeken' stretchWidth large
      onChange={this.onChangeHandler} />
  }
}

const mapStateToProps = (state, ownProps) => ({searchText: state.medewerkers.searchText})

const mapDispatchToProps = (dispatch, ownProps) => ({search (text) { dispatch(setSearchText(text)) }})

export default connect(mapStateToProps, mapDispatchToProps)(MedewerkerSearchBox)
