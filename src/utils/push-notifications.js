import ons from 'onsenui'

import store from '../stores/app-store'
import {storeToken} from '../api'

let ImpPushNotification = (function () {
  let debug = false

  const log = (msg) => { if (debug) console.log(msg) }

  const alert = (title, message) => {
    ons.notification.alert({ title, message })
  }

  const errorHandler = (err) => {
    if (debug) {
      alert(err)
      log(err)
    }
  }

  const getTokenFromFCM = () => {
    FCMPlugin.getToken(
        function (token) {
          if (token == null) {
            setTimeout(getTokenFromFCM, 1000)
          } else {
            log('I got the token: ' + token)
            let tokenData = { key: token, user: 'brody', uuid: device.uuid }
            storeToken(store.getState().settings.endPoint, tokenData).catch((e) =>
               errorHandler('Error during initializing the push notifications/'))
          }
        },
        function (err) {
          errorHandler('error retrieving token: ' + err)
        }
    )
  }

  const enabledNotificationInApp = () => {
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

  const disabledNotificationInApp = () => {
    if (typeof (FCMPlugin) !== 'undefined') {
      FCMPlugin.onNotification(() => null)
    }
  }

  const init = () => {
    if (typeof (FCMPlugin) !== 'undefined') {
      getTokenFromFCM()
      enabledNotificationInApp()
    } else {
      log('new timeout in init')
      setTimeout(init, 1000)
    }
  }

  document.addEventListener('deviceready', init, false)

  return {
    enable: enabledNotificationInApp,
    disable: disabledNotificationInApp,
    debug: () => { debug = true }
  }
})()

export default ImpPushNotification
