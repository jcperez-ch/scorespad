import { createContext } from 'react';

export type SnackbarConfig = {
  autoHideDuration?: number;
  onUndo?: () => void;
  onUpdate?: () => void;
  onHide?: () => void;
  message: string;
  open: boolean;
};

export default createContext<{
  addSnackbar: (config: Omit<SnackbarConfig, 'open'>) => void;
  updateSnackbar: (id: number, config: Pick<SnackbarConfig, 'onUndo' | 'message'>) => void;
  hideSnackbar: (id: number) => void;
}>({
  addSnackbar: () => {},
  updateSnackbar: () => {},
  hideSnackbar: () => {},
});
