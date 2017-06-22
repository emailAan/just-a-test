import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Input from '../components/Input.jsx'
import setEndPoint from '../actions/set-end-point'

const Title = styled.h1``

class Home extends React.Component {
  handleChange = (e) => {
    this.props.setEndPoint(e.target.value)
  }

  render () {
    return (
      <div>
        <Title>Home</Title>
        <Input value={this.props.endPoint}
          placeholder='zoeken'
          onChange={this.handleChange}
          stretchWidth />
      </div>
    )
  }
}
Home.displayName = 'Home'

const mapStateToProps = (state, ownProps) => {
  return {
    endPoint: state.settings.endPoint
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setEndPoint: (endPoint) => {
      dispatch(setEndPoint(endPoint))
    }

  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
