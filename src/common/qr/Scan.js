import React, { useRef, useEffect, useCallback, useState } from 'react';
import noop from 'utils/fn/noop';
import DialogActions from '@mui/material/DialogActions';

import VideoStream from './VideoStream';
import ButtonExtended from '../button/Extended';

function CommonQrScan({
  className,
  style,
  rearCamera = true,
  videoStyle,
  shouldDecode = true,
  fallbackCode = null,
  fallbackMedia = null,
  tryAgainButtonLabel = 'retry',
  giveUpButtonLabel = 'give up',
  onInit = noop,
  onCode = noop,
  onClose = noop,
}) {
  const webWorker = useRef(null);
  const drawVideoFrame = useRef(noop);
  const [codeError, setCodeError] = useState(false);
  const handleTryAgain = () => setCodeError(false);
  const onVideoStreamInit = (state, drawFrame) => {
    if (onInit) {
      onInit(state);
    }
    drawVideoFrame.current = drawFrame;
    if (shouldDecode) {
      drawVideoFrame.current();
    }
  };

  const onFrame = (frameData) => webWorker.current.postMessage(frameData);

  const onFrameDecoded = useCallback(
    (event) => {
      const code = event.data;
      if (code) {
        const { data } = code;
        if (onCode && data.length > 0) {
          try {
            onCode(JSON.parse(data));
          } catch (e) {
            setCodeError(true);
          }
        }
      }

      if (shouldDecode) {
        drawVideoFrame.current();
      }
    },
    [onCode, shouldDecode],
  );

  useEffect(() => {
    webWorker.current = new Worker(`${process.env.PUBLIC_URL || ''}/qr-worker.js`);
    webWorker.current.addEventListener('message', onFrameDecoded);
    return () => {
      if (webWorker.current) {
        webWorker.current.terminate();
        webWorker.current = null;
      }
    };
  }, [onFrameDecoded]);

  const appliedStyle = {
    display: 'grid',
    justifyContent: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    ...style,
  };
  return (
    <div className={className} style={appliedStyle}>
      {codeError ? (
        <>
          {fallbackCode}
          <DialogActions style={{ paddingRight: 0 }}>
            <ButtonExtended color="default" size="large" icon="arrow_back" label={giveUpButtonLabel} onClick={onClose} />
            <ButtonExtended size="large" icon="replay" label={tryAgainButtonLabel} onClick={handleTryAgain} />
          </DialogActions>
        </>
      ) : (
        <VideoStream onFrame={onFrame} onInit={onVideoStreamInit} rearCamera={rearCamera} style={videoStyle} fallback={fallbackMedia} />
      )}
    </div>
  );
}

export default CommonQrScan;
