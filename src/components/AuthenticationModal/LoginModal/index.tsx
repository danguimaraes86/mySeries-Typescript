import LoginModalBody from "../ModalBody/LoginModalBody";
import ModalHeader from "../ModalHeader";

export default function LoginModal() {

  const title = 'Login'

  return (
    <div className='modal fade' id='loginModal' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <ModalHeader title={title} />
          <div className='modal-body'>
            <LoginModalBody />
          </div>
        </div>
      </div>
    </div>
  )
}
