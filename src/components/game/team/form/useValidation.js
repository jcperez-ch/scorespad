import { useTranslation } from 'react-i18next';
import { useValidation, validators } from 'utils/validation';

const { required } = validators;

const useTeamValidation = ({ name }) => {
  const [t] = useTranslation();
  const schema = {
    name: { required },
  };
  const messages = {
    name: {
      required: t('errors.requiredTeamName'),
    },
  };
  return useValidation({ name }, schema, messages, [t]);
};

export default useTeamValidation;
