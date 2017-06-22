import React from 'react'
import { connect } from 'react-redux'

import setSearchText from '../actions/set_medewerker_search'
import Input from '../components/Input.jsx'

class MedewerkerSearchBox extends React.Component {
  onChangeHandler = (e) => this.props.search(e.target.value)

  render () {
    return <Input value={this.props.searchText}
      placeholder='zoeken' stretchWidth large
      onChange={this.onChangeHandler} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const { searchText } = state.medewerkers
  return { searchText }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (text) => {
      dispatch(setSearchText(text))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MedewerkerSearchBox)
