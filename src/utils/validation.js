import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const useTeamValidation = ({ name, onSubmit, errorMessage }) => {
  const [t] = useTranslation();
  const isSubmittedRef = useRef(false);
  return {
    error: isSubmittedRef.current && !name ? t(errorMessage) : null,
    onSubmit: () => {
      if (name) {
        onSubmit();
      } else {
        isSubmittedRef.current = true;
      }
    },
  };
};

export default useTeamValidation;
