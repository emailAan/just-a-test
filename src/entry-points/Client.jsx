import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import 'babel-polyfill'
import 'core-js/fn/object/assign'
import 'sanitize.css/sanitize.css'

import App from '../containers/App.jsx'

injectTapEventPlugin()

ReactDOM.render(<App />
  , document.getElementById('app')
)
