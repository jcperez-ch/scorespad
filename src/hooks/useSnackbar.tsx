import { useContext } from 'react';

import SnackbarManagerContext from '@/config/SnackbarManagerContext';

export default function useSnackbar() {
  return useContext(SnackbarManagerContext);
}
