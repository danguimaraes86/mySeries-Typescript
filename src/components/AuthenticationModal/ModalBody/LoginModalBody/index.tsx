import appIcons from "../../../../util/appIcons";
import LoginForm from "../../../AuthenticationForm/LoginForm";

export default function LoginModalBody() {

  const CREATE_ACCOUNT_ICON = appIcons.CREATE_ACCOUNT_ICON
  const CREATE_ACCOUNT_TEXT = 'Criar nova conta'

  return (
    <>
      <LoginForm />

      <hr className='solid' />

      <div className='vstack'>
        <div className='text-center'>
          <button
            type='submit' className='btn btn-info text-bg-info'
            data-bs-toggle='modal'
            data-bs-target='#registrationModal'>
            <span className='me-2'>
              {CREATE_ACCOUNT_TEXT}
            </span>
            <i className={CREATE_ACCOUNT_ICON} />
          </button>
        </div>
      </div>
    </>
  )
}
