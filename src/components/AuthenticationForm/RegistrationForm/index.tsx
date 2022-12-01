import { FormEvent, useState } from 'react'
import appIcons from '../../../util/appIcons'

export default function RegistrationForm() {

  const CREATE_ACCOUNT_ICON = appIcons.CREATE_ACCOUNT_ICON
  const CREATE_ACCOUNT_TEXT = 'Cadastrar'

  const [userFirstNameInput, setUserFirstNameInput] = useState<string>('')
  const [userLastNameInput, setUserLastNameInput] = useState<string>('')
  const [userEmailInput, setUserEmailInput] = useState<string>('')
  const [userPasswordInput, setUserPasswordInput] = useState<string>('')
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState<string>('')

  function handleRegistrationSubmit(e: FormEvent) {
    e.preventDefault()
    console.log({
      userFirstNameInput,
      userLastNameInput,
      userEmailInput,
      userPasswordInput,
      userPasswordConfirmation
    })
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleRegistrationSubmit(e)}>
      <div>
        <label htmlFor='userFirsNameInput' className='form-label'>Nome</label>
        <div className='input-group'>
          <input type='text' aria-label='Digite seu nome' placeholder='Digite seu nome'
            className='form-control' id='userFirsNameInput'
            value={userFirstNameInput}
            onChange={e => setUserFirstNameInput(e.target.value)} />
          <input type='text' aria-label='Digite seu sobrenome' placeholder='Digite seu sobrenome'
            className='form-control' id='userLastNameInput'
            value={userLastNameInput}
            onChange={e => setUserLastNameInput(e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor='userEmailInput' className='form-label'>Email</label>
        <input type='email' className='form-control'
          id='userEmailInput' placeholder='email@email.com'
          value={userEmailInput}
          onChange={e => setUserEmailInput(e.target.value)} />
      </div>
      <div>
        <label htmlFor='userPasswordInput' className='form-label'>Senha</label>
        <div className='input-group'>
          <input type='password' aria-label='Digite sua senha'
            className='form-control' id='userPasswordInput' placeholder='Digite sua senha'
            value={userPasswordInput}
            onChange={e => setUserPasswordInput(e.target.value)} />
          <input type='password' aria-label='Confirme sua senha'
            className='form-control' id='userPasswordConfirmation' placeholder='Confirme sua senha'
            value={userPasswordConfirmation}
            onChange={e => setUserPasswordConfirmation(e.target.value)} />
        </div>
      </div>
      <button type='submit' className='btn btn-dark text-info'>
        <span className='me-2'>{CREATE_ACCOUNT_TEXT}</span>
        <i className={CREATE_ACCOUNT_ICON} />
      </button>
    </form>
  )
}