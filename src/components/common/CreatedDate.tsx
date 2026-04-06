import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';

import useFormatDate from '@/utils/formatDate';

type Props = {
  base36Key: string;
};

export default function CreatedDate({ base36Key }: Props) {
  const [t] = useTranslation();
  const formatDate = useFormatDate();

  return (
    <Typography variant="caption">
      {t('messages.createdAt', { date: formatDate(base36Key) })}
    </Typography>
  );
}
