import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useRegisterSW } from 'virtual:pwa-register/react';

// import './ReloadPrompt.css';
import useSnackbar from './hooks/useSnackbar';

export default function ReloadPrompt() {
  const [t] = useTranslation();
  const { addSnackbar } = useSnackbar();
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    if (offlineReady || needRefresh) {
      addSnackbar({
        message: t('text.newVersion'),
        onUpdate: () => {
          setOfflineReady(false);
          setNeedRefresh(false);
          updateServiceWorker(true);
        },
      });
    }
  }, [
    addSnackbar,
    needRefresh,
    offlineReady,
    setNeedRefresh,
    setOfflineReady,
    t,
    updateServiceWorker,
  ]);

  return null;
}
