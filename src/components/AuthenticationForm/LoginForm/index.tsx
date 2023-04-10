import { useState } from 'react'
import appIcons from '../../../util/appIcons'

type LoginFormInput = {
  loginEmailInput: string,
  loginPasswordInput: string
}

export default function LoginForm() {

  const LOGIN_ICON = appIcons.LOGIN_ICON
  const LOGIN_TEXT = 'Login'

  const clearFormInput = {
    loginEmailInput: '',
    loginPasswordInput: ''
  }

  const [loginFormInput, setLoginFormInput] = useState<LoginFormInput>(clearFormInput)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginFormInput((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(loginFormInput);
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleLoginSubmit(e)}>
      <div className='form-floating'>
        <input type='email' className='form-control' id='loginEmailInput'
          placeholder='name@example.com' required
          value={loginFormInput.loginEmailInput}
          onChange={handleInputChange} />
        <label htmlFor='loginEmailInput'>Email</label>
      </div>
      <div className='form-floating'>
        <input type='password' className='form-control' id='loginPasswordInput'
          placeholder='Password' required
          value={loginFormInput.loginPasswordInput}
          onChange={handleInputChange} />
        <label htmlFor='loginPasswordInput'>Password</label>
      </div>
      <div className='text-center' >
        <button type='submit' className='btn btn-dark text-info w-100'>
          <span className='me-1'>
            {LOGIN_TEXT}
          </span>
          <i className={LOGIN_ICON} />
        </button>
      </div>
    </form>
  )
}