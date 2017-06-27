import React from 'react'
import { connect } from 'react-redux'
import { Page, Toolbar, BackButton } from 'react-onsenui'

import {Left, Center} from '../../components/Alignment'
import MedewerkerList from './MedewerkerList'
import MedewerkerSearchBox from './MedewerkerSearchBox'
import { selectMedewerker } from './actions'

class Medewerkers extends React.Component {
  backToList = () => this.props.clearSelectedMedewerker()

  renderToolbar = () => (
    <Toolbar>
      <Left>
        <BackButton onClick={this.backToList}>Back</BackButton>
      </Left>
      <Center>{this.props.selectedMedewerker.naam}</Center>
    </Toolbar>
  )

  listPage = () => (
    <Page key={2}>
      <MedewerkerSearchBox />
      <MedewerkerList />
    </Page>
  )

  detailsPage = () => (
    <Page key={1} renderToolbar={this.renderToolbar}>
      {this.props.selectedMedewerker.naam}
    </Page>
  )

  render () {
    return (!this.props.selectedMedewerker) ? this.listPage() : this.detailsPage()
  }
}

Medewerkers.displayName = 'Medewerkers'

const mapStateToProps = (state, ownProps) => {
  return { selectedMedewerker: state.medewerkers.selectedMedewerker }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { clearSelectedMedewerker: () => dispatch(selectMedewerker(null)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Medewerkers)
