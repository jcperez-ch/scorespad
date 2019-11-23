import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const useTeamValidation = ({ name, onSubmit, errorMessage }) => {
  const [t] = useTranslation()
  const [submitCount, setSubmitCount] = useState(0)
  return {
    error: submitCount === 0 || name ? null : t(errorMessage),
    onSubmit: () => {
      setSubmitCount(submitCount + 1)
      if (name) {
        onSubmit()
      }
    },
  }
}

export default useTeamValidation
