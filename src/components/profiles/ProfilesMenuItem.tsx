import { useTranslation } from 'react-i18next';

import PeopleIcon from '@mui/icons-material/People';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

import CustomMenuIcon from '@/components/common/CustomMenuIcon';

type Props = {
  onClick: () => void;
};

export default function ProfilesMenuItem({ onClick }: Props) {
  const [t] = useTranslation();

  return (
    <MenuItem onClick={onClick}>
      <CustomMenuIcon>
        <PeopleIcon />
      </CustomMenuIcon>
      <ListItemText>{t('navigation.profiles')}</ListItemText>
    </MenuItem>
  );
}
