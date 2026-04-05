import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function useNameValidation({
  name,
  onSubmit,
  errorMessage,
}: {
  name: string;
  onSubmit: () => void;
  errorMessage: string;
}) {
  const [t] = useTranslation();
  const isSubmittedRef = useRef(false);
  return {
    error: isSubmittedRef.current && !name ? t(errorMessage) : undefined,
    onSubmit: () => {
      if (name) {
        onSubmit();
      } else {
        isSubmittedRef.current = true;
      }
    },
  };
}
