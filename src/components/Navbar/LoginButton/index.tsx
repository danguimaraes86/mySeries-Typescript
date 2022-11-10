import appIcons from "../../../util/appIcons"

export default function LoginButton() {

  const LOGIN_ICON = appIcons.LOGIN_ICON

  return (
    <div className='ms-2'>
      <button
        type='button'
        className='btn btn-outline-info'
        data-bs-toggle='modal'
        data-bs-target='#loginModal'
      >
        <i className={LOGIN_ICON} />
      </button>
    </div>
  )
}
