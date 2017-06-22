import React from 'react'
import { Provider } from 'react-redux'

import MainLayout from './MainLayout.jsx'
import store from '../stores/app-store'
import pushNotification from '../utils/push-notifications'

require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')

pushNotification.debug()

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>)

App.displayName = 'App'

export default App
