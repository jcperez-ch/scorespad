import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';

import SnackbarManagerContext, { SnackbarConfig } from '@/config/SnackbarManagerContext';

type Props = {
  children: React.ReactNode;
};

export default function SnackbarManager({ children }: Props) {
  const [t] = useTranslation();
  const [snackbars, setSnackbars] = useState<SnackbarConfig[]>([]);
  const snackbarManager = useMemo(
    () => ({
      addSnackbar: (config: Omit<SnackbarConfig, 'open'>) => {
        setSnackbars((prev) => [...prev, { ...config, open: true }]);
      },
      updateSnackbar: (id: number, config: Pick<SnackbarConfig, 'onUndo' | 'message'>) => {
        setSnackbars((prev) =>
          prev.map((snackbar, index) => (index === id ? { ...snackbar, ...config } : snackbar)),
        );
      },
      hideSnackbar: (id: number) => {
        setSnackbars((prev) =>
          prev.map((snackbar, index) => (index === id ? { ...snackbar, open: false } : snackbar)),
        );
      },
    }),
    [],
  );
  return (
    <SnackbarManagerContext.Provider value={snackbarManager}>
      {children}
      {snackbars.map(({ autoHideDuration, message, onHide, onUndo, onUpdate, open }, index) => (
        <Snackbar
          key={index}
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={() => {
            snackbarManager.hideSnackbar(index);
            onHide?.();
          }}
          message={message}
          action={
            <>
              {onUndo != null && (
                <Button
                  size="small"
                  onClick={() => {
                    snackbarManager.hideSnackbar(index);
                    onUndo();
                    onHide?.();
                  }}
                >
                  {t('button.undo')}
                </Button>
              )}
              {onUpdate != null && (
                <Button
                  size="small"
                  onClick={() => {
                    snackbarManager.hideSnackbar(index);
                    onUpdate();
                    onHide?.();
                  }}
                >
                  {t('button.update')}
                </Button>
              )}
              <IconButton
                size="small"
                aria-label={t('button.close')}
                onClick={() => {
                  snackbarManager.hideSnackbar(index);
                  onHide?.();
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      ))}
    </SnackbarManagerContext.Provider>
  );
}
