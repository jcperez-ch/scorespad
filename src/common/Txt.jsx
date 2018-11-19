import { useTranslation } from 'react-i18next/hooks';

const Txt = ({ id }) => {
  const [t] = useTranslation();

  return t(id);
};

export default Txt;
