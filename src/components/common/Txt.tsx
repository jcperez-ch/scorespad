import { useTranslation } from 'react-i18next';

type Props = {
  id: string;
};

const Txt = ({ id }: Props) => {
  const [t] = useTranslation();

  return t(id);
};

export default Txt;
