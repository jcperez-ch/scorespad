import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import React, { useMemo, useState } from 'react';

export default function useStackbar({ autoHideDuration = 4500, onUndo }) {
  const [message, setMessage] = useState();
  const [t] = useTranslation();
  return useMemo(
    () => ({
      snackbar: (
        <Snackbar
          open={message != null}
          autoHideDuration={autoHideDuration}
          onClose={() => setMessage()}
          message={message}
          action={
            <>
              {onUndo && (
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => {
                    setMessage();
                    onUndo();
                  }}
                >
                  {t('button.undo')}
                </Button>
              )}
              <IconButton size="small" aria-label={t('button.close')} color="inherit" onClick={() => setMessage()}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      ),
      onShow: setMessage,
    }),
    [message, autoHideDuration, onUndo],
  );
}
