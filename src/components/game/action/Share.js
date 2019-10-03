import React, {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import QRCode from 'qrcode'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import SlideUp from 'common/SlideUp'
import ButtonExtended from 'common/button/Extended'
import DialogTitle from 'common/dialog/Title'
import DialogHeadline from 'common/dialog/Headline'
import GameStoreContext from 'components/game/context/Store'

const GameActionShare = ({ id, onClose }) => {
  const [games] = useContext(GameStoreContext)
  const [dataUrl, setDataUrl] = useState()
  const [open, setOpen] = useState(false)
  const [t] = useTranslation()
  const toggleOpen = () => setOpen(!open)
  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  const handleGenerate = useCallback(async (code) => {
    setDataUrl(await QRCode.toDataURL(document.getElementById('qrcode'), code, { width: 290 }))
  }, [])

  useEffect(() => {
    const game = games[id]
    if (game) {
      handleGenerate(JSON.stringify(game))
    }
  }, [id, games, handleGenerate])
  return (
    <>
      <ButtonExtended
        color="primary"
        size="small"
        icon="mobile_screen_share"
        label={t('button.share')}
        onClick={toggleOpen}
      />
      <Dialog
        fullScreen
        id="game-add-dialog"
        onClose={toggleOpen}
        aria-labelledby="game-add-dialog-title"
        open={open}
        TransitionComponent={SlideUp}
      >
        <DialogTitle id="game-add-dialog-title" onClose={toggleOpen}>
          {t('title.shareGame')}
        </DialogTitle>
        <DialogContent>
          <DialogHeadline>{t('messages.confirmShareGame')}</DialogHeadline>
          {useMemo(
            () => (
              <div>{dataUrl && <img src={dataUrl} alt="qr code" />}</div>
            ),
            [dataUrl],
          )}
          <DialogHeadline>
            {t('messages.confirmShareGame_step1')}
            <br />
            {t('messages.confirmShareGame_step2')}
            <br />
            {t('messages.confirmShareGame_step3')}
            <br />
            {t('messages.confirmShareGame_step4')}
          </DialogHeadline>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" autoFocus onClick={handleClose}>
            {t('button.ok')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default GameActionShare
