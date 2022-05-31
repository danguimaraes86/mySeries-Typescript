import appIcons from "../../../util/appIcons"

export default function FavoriteButton() {
  const FAVORITE_ICON = appIcons.FAVORITE_ICON

  return (
    <div className='col-12'>
      <button className='btn btn-outline-dark w-100'>
        <span className='d-none d-md-inline-block me-1'>Favorito</span>
        <i className={FAVORITE_ICON} />
      </button>
    </div>
  )
}
