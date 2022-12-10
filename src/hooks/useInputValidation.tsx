/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

type Props = {
  submitted: boolean,
  validations?: {
    lenght?: number,
    confirmation?: string,
    email?: boolean
  }
}

export function useInputValidation({ submitted, validations }: Props) {

  const VALID = 'is-valid'
  const INVALID = 'is-invalid'

  const [input, setInput] = useState<string>('')
  const [isValid, setIsValid] = useState<string>('');

  useEffect(() => {
    if (!submitted) setIsValid('')
    if (submitted) {
      if (validations?.lenght) {
        input.length >= validations.lenght ? setIsValid(VALID) : setIsValid(INVALID)
      }
      if (validations?.confirmation && validations?.lenght) {
        (input === validations.confirmation && input.length >= validations.lenght) ? setIsValid(VALID) : setIsValid(INVALID)
      }
      if (validations?.email) {
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(input) ? setIsValid(VALID) : setIsValid(INVALID)
      }
    }
  }, [input, submitted])

  return { input, setInput, isValid }
}
