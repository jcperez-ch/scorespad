import { useTranslation } from 'react-i18next';

import ColorLensIcon from '@mui/icons-material/ColorLens';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

import CustomMenuIcon from '@/components/common/CustomMenuIcon';

type Props = {
  onClick: () => void;
};

export default function ThemeMenuItem({ onClick }: Props) {
  const [t] = useTranslation();

  return (
    <MenuItem onClick={onClick}>
      <CustomMenuIcon>
        <ColorLensIcon />
      </CustomMenuIcon>
      <ListItemText>{t('settings.changeTheme')}</ListItemText>
    </MenuItem>
  );
}
