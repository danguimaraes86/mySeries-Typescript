import { FormEvent, useState } from 'react';
import { useInputValidation } from '../../../hooks/useInputValidation';
import appIcons from '../../../util/appIcons';

export default function RegistrationForm() {

  const CREATE_ACCOUNT_ICON = appIcons.CREATE_ACCOUNT_ICON
  const CREATE_ACCOUNT_TEXT = 'Cadastrar'

  const [submitted, setSubmitted] = useState<boolean>(false)

  const [userFirstNameInput, setUserFirstNameInput] = useState<string>('')
  const [userFirstNameValid] = useInputValidation({ input: userFirstNameInput, submitted, validations: { lenght: 3 } })

  const [userLastNameInput, setUserLastNameInput] = useState<string>('')
  const [userLastNameValid] = useInputValidation({ input: userLastNameInput, submitted, validations: { lenght: 3 } })

  const [userEmailInput, setUserEmailInput] = useState<string>('')
  const [userEmailValid] = useInputValidation({ input: userEmailInput, submitted, validations: { lenght: 6, email: true } })

  const [userPasswordInput, setUserPasswordInput] = useState<string>('')
  const [userPasswordValid] = useInputValidation({ input: userPasswordInput, submitted, validations: { lenght: 6 } })

  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState<string>('')
  const [userConfirmationValid] = useInputValidation({ input: userPasswordConfirmation, submitted, validations: { lenght: 6, confirmation: userPasswordInput } })

  function handleClearForm() {
    setUserFirstNameInput('')
    setUserLastNameInput('')
    setUserEmailInput('')
    setUserPasswordInput('')
    setUserPasswordConfirmation('')
    setSubmitted(false)
  }

  function handleRegistrationSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (submitted &&
      ![userFirstNameValid, userLastNameValid,
        userEmailValid, userPasswordValid,
        userConfirmationValid].includes('is-invalid')
    ) {
      console.log({
        userFirstNameInput,
        userLastNameInput,
        userEmailInput,
        userPasswordInput,
        userPasswordConfirmation
      })
    } else { console.log(`invalid`); }
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleRegistrationSubmit(e)} noValidate>
      <div>
        <label htmlFor='userFirsNameInput' className='form-label'>Nome</label>
        <div className='input-group'>
          <input type='text' aria-label='Digite seu nome' placeholder='Digite seu nome'
            className={`form-control ${userFirstNameValid}`} id='userFirsNameInput'
            value={userFirstNameInput}
            onChange={e => setUserFirstNameInput(e.target.value)} />
          <input type='text' aria-label='Digite seu sobrenome' placeholder='Digite seu sobrenome'
            className={`form-control ${userLastNameValid}`} id='userLastNameInput'
            value={userLastNameInput}
            onChange={e => setUserLastNameInput(e.target.value)} />
        </div>
        <div className='form-text'> Mínimo de 3 caracteres</div>
      </div>
      <div>
        <label htmlFor='userEmailInput' className='form-label'>Email</label>
        <input type='email' aria-label='Digite seu email' placeholder='email@email.com'
          className={`form-control ${userEmailValid}`} id='userEmailInput'
          value={userEmailInput}
          onChange={e => setUserEmailInput(e.target.value)} />
      </div>
      <div>
        <label htmlFor='userPasswordInput' className='form-label'>Senha</label>
        <div className='input-group'>
          <input type='password' aria-label='Digite sua senha' placeholder='Digite sua senha'
            className={`form-control ${userPasswordValid}`} id='userPasswordInput'
            value={userPasswordInput}
            onChange={e => setUserPasswordInput(e.target.value)} />
          <input type='password' aria-label='Confirme sua senha' placeholder='Confirme sua senha'
            className={`form-control ${userConfirmationValid}`} id='userPasswordConfirmation'
            value={userPasswordConfirmation}
            onChange={e => setUserPasswordConfirmation(e.target.value)} />
        </div>
        <div className='form-text'> Mínimo de 6 caracteres</div>
      </div>
      <button type='submit' className='btn btn-dark text-info'>
        <span className='me-2'>{CREATE_ACCOUNT_TEXT}</span>
        <i className={CREATE_ACCOUNT_ICON} />
      </button>
      <button type='button' className='btn btn-secondary'
        onClick={handleClearForm}>
        Limpar
      </button>
    </form>
  )

}