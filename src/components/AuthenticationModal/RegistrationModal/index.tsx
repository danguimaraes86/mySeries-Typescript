import RegistrationModalBody from "../ModalBody/RegistrationModalBody";
import ModalHeader from "../ModalHeader";

export default function RegistrationModal() {

  const title = 'Crie sua conta'

  return (
    <div className='modal fade' id='registrationModal' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <ModalHeader title={title} />
          <div className='modal-body'>
            <RegistrationModalBody />
          </div>
        </div>
      </div>
    </div>
  )
}
