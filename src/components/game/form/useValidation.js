import { useTranslation } from 'react-i18next/hooks';
import { useValidation, validators } from 'utils/validation';

const { required } = validators;

const useGameValidation = ({ name }) => {
  const [t] = useTranslation();
  const schema = {
    name: { required },
  };
  const messages = {
    name: {
      required: t('errors.requiredGameName'),
    },
  };
  return useValidation({ name }, schema, messages, [t]);
};

export default useGameValidation;
