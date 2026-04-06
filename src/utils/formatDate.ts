import { format } from 'date-fns';

import useLocalizedFormatRelativeOptions from '@/locale/useLocalizedFormatRelativeOptions';

export default function useFormatDate() {
  const formatOptions = useLocalizedFormatRelativeOptions();
  return (base36Key: string) => format(new Date(parseInt(base36Key, 36)), 'PPP', formatOptions);
}
