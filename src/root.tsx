import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// from MUI's toolpad we only use Notifications
import { NotificationsProvider } from '@toolpad/core/useNotifications';

import LocaleProvider from '@/locale/LocaleProvider';
import { StoreState } from '@/store/State';
import StoreProvider from '@/store/StoreProvider';
import ThemeProvider from '@/theme/ThemeProvider';

import ReloadPrompt from './ReloadAppToast';
import SnackbarManager from './utils/SnackbarManager';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

export default function render(App: ComponentType, initialState: StoreState) {
  root.render(
    <StrictMode>
      <LocaleProvider initial={initialState.locale}>
        <SnackbarManager>
          <ThemeProvider initial={initialState.theme}>
            <StoreProvider initial={initialState.games}>
              <NotificationsProvider>
                <App />
                <ReloadPrompt />
              </NotificationsProvider>
            </StoreProvider>
          </ThemeProvider>
        </SnackbarManager>
      </LocaleProvider>
    </StrictMode>,
  );
}
