import appIcons from '../../../util/appIcons';
import LoginModalBody from '../ModalBody/LoginModalBody';
import ModalHeader from '../ModalHeader';

export default function LoginModal() {

  const title = 'Login'
  const CREATE_ACCOUNT_ICON = appIcons.CREATE_ACCOUNT_ICON
  const CREATE_ACCOUNT_TEXT = 'Criar nova conta'


  return (
    <div className='modal fade' id='loginModal' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <ModalHeader title={title} />
          <div className='modal-body'>
            <LoginModalBody />
          </div>
          <div className='modal-footer justify-content-center'>
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
      </div>
    </div>
  )
}
