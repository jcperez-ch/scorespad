import React, { useMemo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import CardHeader from '@material-ui/core/CardHeader'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'

import CommaList from 'common/CommaList'
import CommonQrScan from 'common/qr/Scan'
import CommonRoutePaper from 'common/styled/RoutePaper'
import DialogTitle from 'common/dialog/Title'
import SlideUp from 'common/SlideUp'
import WarnPlaceholder from 'common/WarnPlaceholder'

const GameFormByScan = ({ onClose, onSuccess }) => {
  const [t] = useTranslation()
  const [code, setCode] = useState(null)
  const handleScan = useCallback((newCode) => {
    setCode(newCode)
  }, [])
  const handleAdd = () => {
    const { id, ...newGame } = code
    onSuccess(id, newGame)
  }
  const createdAt = useMemo(() => {
    if (code) {
      const date = new Date(parseInt(code.id, 36))
      return date.toDateString()
    }
    return ''
  }, [code])
  return (
    <CommonRoutePaper>
      <Dialog id="game-scan-dialog" onClose={onClose} aria-labelledby="game-scan-dialog-title" open={!code} fullScreen TransitionComponent={SlideUp}>
        <DialogTitle id="game-share-dialog-title" onClose={onClose}>
          {t('game_scan_title')}
        </DialogTitle>
        <DialogContent>
          <CommonQrScan
            fallbackCode={<WarnPlaceholder icon="mobile_off" message={t('game_scan_wrong_code')} />}
            fallbackMedia={<WarnPlaceholder icon="videocam_off" message={t('game_scan_no_camera')} />}
            tryAgainButtonLabel={t('button.tryAgain')}
            giveUpButtonLabel={t('button.back')}
            onCode={handleScan}
            onClose={onClose}
          />
        </DialogContent>
      </Dialog>
      {code && (
        <>
          <CardHeader title={code.name} subheader={t('messages.createdAt', { date: createdAt })} />
          {code.teams.length > 0 && (
            <Typography variant="overline">
              <CommaList items={code.teams} keyedBy="name" attribute="name" />
            </Typography>
          )}
          <Fab variant="extended" color="primary" size="large" aria-label={t('button.createGame')} onClick={handleAdd}>
            {t('button.confirmAndCreate')}
          </Fab>
        </>
      )}
    </CommonRoutePaper>
  )
}

export default GameFormByScan
