import { useEffect, useState } from 'react'

type Props = {
  input: string,
  submitted: boolean,
  validations?: {
    lenght?: number,
    confirmation?: string,
    email?: boolean
  }
}

export function useInputValidation({ input, submitted, validations }: Props) {

  const valid = 'is-valid'
  const invalid = 'is-invalid'

  const [isValid, setIsValid] = useState<string>('');

  useEffect(() => {
    if (!submitted) setIsValid('')
    
    if (submitted) {
      if (validations?.lenght) {
        input.length >= validations.lenght ? setIsValid(valid) : setIsValid(invalid)
      }
      if (validations?.confirmation && validations?.lenght) {
        (input === validations.confirmation && input.length >= validations.lenght) ? setIsValid(valid) : setIsValid(invalid)
      }
      if (validations?.email) {
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(input) ? setIsValid(valid) : setIsValid(invalid)
      }
    }
  }, [input, submitted, validations?.confirmation, validations?.email, validations?.lenght])

  return [isValid]
}
