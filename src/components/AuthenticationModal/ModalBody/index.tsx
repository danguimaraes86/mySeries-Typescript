import LoginForm from '../LoginForm'

export default function ModalBody() {

  return (
    <div className='modal-body'>

      <LoginForm />

      <hr className='solid' />

      <div className='vstack'>
        <div className='text-center'>
          <button type='submit' className='btn btn-info text-bg-info'>
            <span className='me-2'>
              Criar nova conta
            </span>
            <i className='bi bi-person-plus-fill' />
          </button>
        </div>
      </div>
    </div>
  )
}
