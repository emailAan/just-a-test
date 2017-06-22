import React from 'react'
import { Button } from 'react-onsenui'

class CameraTester extends React.Component {
  onPhotoDataSuccess = (imageData) => {
    var smallImage = document.getElementById('smallImage')
    smallImage.style.display = 'block'
    smallImage.src = 'data:image/jpeg;base64,' + imageData
  }

  capturePhoto = () => {
    try {
      var pictureSource = navigator.camera.PictureSourceType
      var destinationType = navigator.camera.DestinationType
      navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
      })
    } catch (e) {
      alert(e)
    }
  }

  onFail = (message) => {
    alert('Failed because: ' + message)
  }

  render () {
    return (
      <div>
        <h1>CameraTester</h1>
        <img id='smallImage' />
        <Button onClick={this.capturePhoto}>Capture me!</Button>
      </div>
    )
  }
}

CameraTester.displayName = 'CameraTester'

export default CameraTester
