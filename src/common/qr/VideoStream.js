import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isSafari from 'utils/isSafari'

const videoStyles = {
  display: 'flex',
}

class CommonVideoStream extends Component {
  stream = null

  streamWidth = 0

  streamHeight = 0

  video = null

  canvasContext = null

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    const { onInit } = this.props
    try {
      await this.startCamera()
      const { strean, video, canvasContext } = this
      onInit({ strean, video, canvasContext }, this.drawFrame)
    } catch (e) {
      this.setState({ error: `Browser camera init error: ${e}` })
    }
  }

  componentWillUnmount() {
    this.stopCamera()
  }

  stopCamera = () => {
    if (!this.stream) return
    this.stream.getTracks().map((t) => t.stop())
    this.stream = null
    this.streamWidth = 0
    this.streamHeight = 0
    this.canvasContext = null
  }

  startCamera = async () => {
    this.stopCamera()

    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      throw new Error('WebRTC API not supported in this browser')
    }

    const devices = await navigator.mediaDevices.enumerateDevices()
    const cameras = devices.filter((device) => device.kind === 'videoinput')
    let videoMode = { facingMode: 'user' }
    if (cameras.length > 1) {
      const cameraIndex = this.props.rearCamera ? 1 : 0
      const cameraEnv = this.props.rearCamera ? 'environment' : 'user'
      videoMode = isSafari() ? { facingMode: { exact: cameraEnv } } : { deviceId: cameras[cameraIndex].deviceId }
    }

    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: videoMode,
    })

    if (this.video.srcObject !== undefined) {
      this.video.srcObject = this.stream
    } else if (this.video.mozSrcObject !== undefined) {
      this.video.mozSrcObject = this.stream
    } else if (window.URL.createObjectURL) {
      this.video.src = window.URL.createObjectURL(this.stream)
    } else if (window.webkitURL) {
      this.video.src = window.webkitURL.createObjectURL(this.stream)
    } else {
      this.video.src = this.stream
    }

    this.video.playsInline = true
    this.video.play() // firefox does not emit `loadeddata` if video not playing
    await this.streamLoadedPromise()

    this.streamWidth = this.video.videoWidth
    this.streamHeight = this.video.videoHeight

    if (!this.canvasContext) {
      const canvas = document.createElement('canvas')
      canvas.width = this.streamWidth
      canvas.height = this.streamHeight
      this.canvasContext = canvas.getContext('2d')
    }
  }

  streamLoadedPromise = () =>
    new Promise((resolve, reject) => {
      this.video.addEventListener('loadeddata', resolve, { once: true })
      this.video.addEventListener('error', reject, { once: true })
    })

  captureFrame = () => {
    this.canvasContext.drawImage(this.video, 0, 0, this.streamWidth, this.streamHeight)
    return this.canvasContext.getImageData(0, 0, this.streamWidth, this.streamHeight)
  }

  drawFrame = () => {
    window.requestAnimationFrame(() => {
      const { onFrame } = this.props
      if (!this.canvasContext) {
        return
      }
      const { data } = this.captureFrame()
      onFrame({
        data,
        width: this.streamWidth,
        height: this.streamHeight,
      })
    })
  }

  render() {
    const { style = {}, fallback = null } = this.props
    const { error } = this.state
    return error ? fallback : <video style={{ ...videoStyles, ...style }} ref={(v) => (this.video = v)} />
  }
}

CommonVideoStream.propTypes = {
  onInit: PropTypes.func.isRequired,
  onFrame: PropTypes.func.isRequired,
  rearCamera: PropTypes.bool,
}

CommonVideoStream.defaultProps = {
  rearCamera: true,
}

export default CommonVideoStream
