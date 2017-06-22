import request from 'superagent'
import ons from 'onsenui'

import store from '../stores/app-store'
import {isUndefined} from './utils'

let ImpPushNotification = (function () {
  let debug = false
  let storeTokenApiUrl = store.getState().settings.endPoint + '/gcm/keys'

  let log = (msg) => { if (debug) console.log(msg) }

  let alert = (title, message) => {
    ons.notification.alert({ title, message })
  }

  let errorHandler = (err) => {
    if (debug) {
      alert(err)
      log(err)
    }
  }

  let storeToken = (token, user) => {
    request
            .post(storeTokenApiUrl)
            .send({ key: token, user: user, uuid: device.uuid })
            .set('Accept', 'application/json')
            .end(function (err, res) {
              if (err || !res.ok) {
                errorHandler('Error during initializing the push notifications/')
              }
            })
  }

  let getTokenFromFCM = () => {
    FCMPlugin.getToken(
        function (token) {
          if (token == null) {
            setTimeout(getTokenFromFCM, 1000)
          } else {
            log('I got the token: ' + token)
            storeToken(token, 'brody')
          }
        },
        function (err) {
          errorHandler('error retrieving token: ' + err)
        }
    )
  }

  let enabledNotificationInApp = () => {
    if (typeof (FCMPlugin) !== 'undefined') {
      FCMPlugin.onNotification(function (data) {
        if (data.wasTapped) {
                    // Notification was received on device tray and tapped by the user.
          alert(data.title, data.message)
        } else {
                    // Notification was received in foreground. Maybe the user needs to be notified.
          alert(data.title, data.message)
        }
      })
    }
  }

  let disabledNotificationInApp = () => {
    if (typeof (FCMPlugin) !== 'undefined') {
      FCMPlugin.onNotification(() => null)
    }
  }

  let init = () => {
    if (typeof (FCMPlugin) !== 'undefined') {
      getTokenFromFCM()
      enabledNotificationInApp()
    } else {
      log('new timeout in init')
      setTimeout(init, 1000)
    }
  }

  document.addEventListener('deviceready', onDeviceReady, false)
  function onDeviceReady () {
    console.log(device.cordova)
    init()
  }

  return {
    enable: enabledNotificationInApp,
    disable: disabledNotificationInApp,
    debug: () => { debug = true }
  }
})()

export default ImpPushNotification
