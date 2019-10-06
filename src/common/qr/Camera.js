import React, { useRef, useEffect, useCallback } from 'react'
import { noop } from 'lodash'

import VideoStream from './VideoStream'

const CommonQrCamera = ({
  className,
  style,
  rearCamera = true,
  videoStyle,
  shouldDecode = true,
  onInit = noop,
  onCode = noop,
  fallback = null,
}) => {
  const webWorker = useRef(null)
  const drawVideoFrame = useRef(noop)
  const onVideoStreamInit = (state, drawFrame) => {
    if (onInit) {
      onInit(state)
    }
    drawVideoFrame.current = drawFrame
    if (shouldDecode) {
      drawVideoFrame.current()
    }
  }

  const onFrame = (frameData) => webWorker.current.postMessage(frameData)

  const onFrameDecoded = useCallback((event) => {
    const code = event.data
    if (code) {
      const { data } = code
      if (onCode && data.length > 0) {
        onCode(code)
      }
    }

    if (shouldDecode) {
      drawVideoFrame.current()
    }
  }, [onCode, shouldDecode])

  useEffect(() => {
    webWorker.current = new Worker(`${process.env.PUBLIC_URL || '/'}qr-worker.js`)
    webWorker.current.addEventListener('message', onFrameDecoded)
    return () => {
      if (webWorker.current) {
        webWorker.current.terminate()
        webWorker.current = null
      }
    }
  }, [onFrameDecoded])

  const appliedStyle = {
    display: 'grid',
    justifyContent: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    ...style,
  }
  return (
    <div className={className} style={appliedStyle}>
      <VideoStream
        onFrame={onFrame}
        onInit={onVideoStreamInit}
        rearCamera={rearCamera}
        style={videoStyle}
        fallback={fallback}
      />
    </div>
  )
}

export default CommonQrCamera
