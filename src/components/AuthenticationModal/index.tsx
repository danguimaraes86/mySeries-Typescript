import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

export default function AuthenticationModal() {
  return (
    <div className='modal fade' id='loginModal' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <ModalHeader />
          <ModalBody />
        </div>
      </div>
    </div>
  )
}
