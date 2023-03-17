import React, { useState } from 'react';
import appIcons from '../../../util/appIcons';

type RegistrationFormInput = {
  userFirstNameInput: string,
  userLastNameInput: string,
  userEmailInput: string,
  userPasswordInput: string
}

export default function RegistrationForm() {

  const CREATE_ACCOUNT_ICON = appIcons.CREATE_ACCOUNT_ICON
  const CREATE_ACCOUNT_TEXT = 'Cadastrar'

  const clearFormInput = {
    userFirstNameInput: '',
    userLastNameInput: '',
    userEmailInput: '',
    userPasswordInput: ''
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
    const formElement = e.target as HTMLFormElement
    if (formElement.checkValidity()) {
      console.log(registrationFormInput);
    }
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleRegistrationSubmit(e)}>
      <div>
        <label htmlFor='userFirstNameInput' className='form-label'>Nome</label>
        <div className='input-group'>
          <input type='text' aria-label='Digite seu nome' placeholder='Digite seu nome'
            className='form-control' id='userFirstNameInput'
            required minLength={3}
            value={registrationFormInput.userFirstNameInput}
            onChange={handleInputChange} />
          <input type='text' aria-label='Digite seu sobrenome' placeholder='Digite seu sobrenome'
            className='form-control' id='userLastNameInput'
            required minLength={3}
            value={registrationFormInput.userLastNameInput}
            onChange={handleInputChange} />
        </div>
        <div className='form-text'> Mínimo de 3 caracteres</div>
      </div>
      <div>
        <label htmlFor='userEmailInput' className='form-label'>Email</label>
        <input type='email' aria-label='Digite seu email' placeholder='email@email.com'
          className='form-control' id='userEmailInput'
          required
          value={registrationFormInput.userEmailInput}
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor='userPasswordInput' className='form-label'>Senha</label>
        <input type='password' aria-label='Digite sua senha' placeholder='Digite sua senha'
          className='form-control' id='userPasswordInput'
          required minLength={6}
          value={registrationFormInput.userPasswordInput}
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