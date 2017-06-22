import React from 'react'
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui'

import Home from './Home.jsx'
import Camera from '../components/CameraTester.jsx'
import TileList from '../containers/TileListComponent.jsx'
import Medewerkers from './Medewerkers.jsx'
import {Center} from '../components/Alignment'

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
  constructor (props) {
    super(props)
    this.state = { index: 0 }
  };

  getTabObject = (title, index, icon, comp) => {
    return {
      content: <TabContent key={index} title={title} >{comp}</TabContent>,
      tab: <Tab key={index} label={title} icon={icon} />
    }
  }

  renderTabs = () => {
    return [
      this.getTabObject('Home', 1, 'md-home', <Home />),
      this.getTabObject('Tiles', 2, 'md-apps', <TileList />),
      this.getTabObject('Camera', 3, 'md-camera', <Camera />),
      this.getTabObject('Medewerkers', 4, 'md-accounts', <Medewerkers />)
    ]
  }

  updateSelectedTab = (event) => {
    if (event.index != this.state.index) {
      this.setState({ index: event.index })
    }
  }

  render () {
    return (
      <Tabbar index={this.state.index}
        onPreChange={this.updateSelectedTab}
        renderTabs={this.renderTabs} />
    )
  }
}

MainLayout.displayName = 'MainLayout'

export default MainLayout
