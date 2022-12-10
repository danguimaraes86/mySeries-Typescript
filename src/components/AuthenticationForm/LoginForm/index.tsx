import { FormEvent, useState } from 'react'
import { useInputValidation } from '../../../hooks/useInputValidation'
import appIcons from '../../../util/appIcons'

export default function LoginForm() {

  const LOGIN_ICON = appIcons.LOGIN_ICON
  const LOGIN_TEXT = 'Login'

  const [submitted, setSubmitted] = useState<boolean>(false)

  const { input: userEmail, setInput: setUserEmail,
    isValid: userEmailValid } = useInputValidation({ submitted, validations: { lenght: 6, email: true } })

  const { input: userPassword, setInput: setUserPassword,
    isValid: userPasswordValid } = useInputValidation({ submitted, validations: { lenght: 6 } })

  function handleLoginSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)

    if (submitted && ![userEmailValid, userPasswordValid].includes('is-invalid')) {
      console.log({
        userEmail,
        userPassword
      })
    } else { console.log(`invalid`); }
  }

  return (
    <form className='vstack gap-3' onSubmit={e => handleLoginSubmit(e)} noValidate>
      <div className='form-floating'>
        <input type='email' className={`form-control ${userEmailValid}`} id='floatingInput'
          placeholder='name@example.com'
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)} />
        <label htmlFor='floatingInput'>Email</label>
      </div>
      <div className='form-floating'>
        <input type='password' className={`form-control ${userPasswordValid}`} id='floatingPassword'
          placeholder='Password'
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