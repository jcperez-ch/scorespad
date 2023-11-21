import React, { useRef, useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import CommonSnackbar from 'common/Snackbar';
import Txt from 'common/Txt';

import * as serviceWorker from '../serviceWorkerRegistration';

export default function AppWorker() {
  const [updateWarning, setUpdateWarning] = useState(false);
  const handleClose = () => setUpdateWarning(false);
  const registrationRef = useRef(null);
  const onUpdate = async () => {
    const [cacheKey] = await caches.keys();
    if (cacheKey) {
      const cache = await caches.open(cacheKey);
      const requests = await cache.keys();
      await Promise.all((requests || []).map((request) => cache.delete(request)));
    }
    await registrationRef.current.unregister();
    setTimeout(() => window.location.reload(), 350);
  };
  useEffect(() => {
    serviceWorker.register({
      async onUpdate(registration) {
        setUpdateWarning(true);
        registrationRef.current = registration;
      },
      async onSuccess() {
        console.log('Worker is supposed to be OK');
      },
    });
  }, []);
  return (
    <CommonSnackbar
      open={updateWarning}
      action={[
        <Button key="undo" variant="outlined" color="primary" size="small" onClick={onUpdate}>
          <Txt id="button.update" />
        </Button>,
      ]}
      onClose={handleClose}
    >
      <span id="message-id">
        <Txt id="text.newVersion" />
      </span>
    </CommonSnackbar>
  );
}
