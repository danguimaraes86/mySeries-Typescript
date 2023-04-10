import React, { useState } from 'react';
import appIcons from '../../../util/appIcons';

type RegistrationFormInput = {
  registrationFirstNameInput: string,
  registrationLastNameInput: string,
  registrationEmailInput: string,
  registrationPasswordInput: string
}

export default function RegistrationForm() {

  const CREATE_ACCOUNT_ICON = appIcons.CREATE_ACCOUNT_ICON
  const CREATE_ACCOUNT_TEXT = 'Cadastrar'

  const clearFormInput = {
    registrationFirstNameInput: '',
    registrationLastNameInput: '',
    registrationEmailInput: '',
    registrationPasswordInput: ''
  }

  const [registrationFormInput, setRegistrationFormInput] = useState<RegistrationFormInput>(clearFormInput)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRegistrationFormInput((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleClearForm() {
    setRegistrationFormInput(clearFormInput)
  }

  function handleRegistrationSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(registrationFormInput);
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleRegistrationSubmit(e)}>
      <div>
        <label htmlFor='registrationFirstNameInput' className='form-label'>Nome</label>
        <div className='input-group'>
          <input type='text' aria-label='Digite seu nome' placeholder='Digite seu nome'
            className='form-control' id='registrationFirstNameInput'
            required minLength={3}
            value={registrationFormInput.registrationFirstNameInput}
            onChange={handleInputChange} />
          <input type='text' aria-label='Digite seu sobrenome' placeholder='Digite seu sobrenome'
            className='form-control' id='registrationLastNameInput'
            required minLength={3}
            value={registrationFormInput.registrationLastNameInput}
            onChange={handleInputChange} />
        </div>
        <div className='form-text'> Mínimo de 3 caracteres</div>
      </div>
      <div>
        <label htmlFor='registrationEmailInput' className='form-label'>Email</label>
        <input type='email' aria-label='Digite seu email' placeholder='email@email.com'
          className='form-control' id='registrationEmailInput' required
          value={registrationFormInput.registrationEmailInput}
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor='registrationPasswordInput' className='form-label'>Senha</label>
        <input type='password' aria-label='Digite sua senha' placeholder='Digite sua senha'
          className='form-control' id='registrationPasswordInput'
          required minLength={6}
          value={registrationFormInput.registrationPasswordInput}
          onChange={handleInputChange} />
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