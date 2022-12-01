import { FormEvent, useState } from 'react'
import appIcons from '../../../util/appIcons'

export default function LoginForm() {

  const LOGIN_ICON = appIcons.LOGIN_ICON
  const LOGIN_TEXT = 'Login'

  let [userEmail, setUserEmail] = useState<string>('')
  let [userPassword, setUserPassword] = useState<string>('')

  function handleLoginSubmit(e: FormEvent) {
    e.preventDefault()
    console.log({
      userEmail,
      userPassword
    })
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleLoginSubmit(e)}>
      <div className='form-floating'>
        <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com'
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)} />
        <label htmlFor='floatingInput'>Email</label>
      </div>
      <div className='form-floating'>
        <input type='password' className='form-control' id='floatingPassword' placeholder='Password'
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)} />
        <label htmlFor='floatingPassword'>Password</label>
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