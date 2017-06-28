import React from 'react'
import { connect } from 'react-redux'
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui'

import Home from '../Settings'
import Camera from '../../components/CameraTester'
import TileList from '../TileList'
import Medewerkers from '../Medewerkers'
import {Center} from '../../components/Alignment'
import setDefaultPage from '../Settings/set-default-page'

const TabContent = ({title, children}) => {
  return (
    <Page renderToolbar={() => (
      <Toolbar>
        <Center>{title}</Center>
      </Toolbar>
        )}>
      {children}
    </Page>
  )
}

class MainLayout extends React.Component {
  getTabObject = (title, index, icon, comp) => ({
    content: <TabContent key={index} title={title} >{comp}</TabContent>,
    tab: <Tab key={index} label={title} icon={icon} />
  })

  renderTabs = () => {
    const index = this.props.defaultPageIndex
    return [
      this.getTabObject('Home', 0, 'md-home', index === 0 ? <Home /> : null),
      this.getTabObject('Tiles', 1, 'md-apps', index === 1 ? <TileList /> : null),
      this.getTabObject('Camera', 2, 'md-camera', index === 2 ? <Camera /> : null),
      this.getTabObject('Medewerkers', 3, 'md-accounts', index === 3 ? <Medewerkers /> : null)
    ]
  }

  updateSelectedTab = (event) => {
    if (event.index !== this.props.defaultPageIndex) {
      this.props.setDefaultPage(event.index)
    }
  }

  render () {
    return (
      <Tabbar index={this.props.defaultPageIndex}
        onPreChange={this.updateSelectedTab}
        renderTabs={this.renderTabs} />
    )
  }
}

MainLayout.displayName = 'MainLayout'

const mapStateToProps = (state, ownProps) => ({ defaultPageIndex: state.settings.defaultPageIndex })

const mapDispatchToProps = (dispatch, ownProps) => ({
  setDefaultPage (defaultPageIndex) {
    dispatch(setDefaultPage(defaultPageIndex))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout)
