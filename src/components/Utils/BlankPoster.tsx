import appIcons from '../../util/appIcons'

type Props = {
  page: string
}

export default function BlankPoster({ page }: Props) {

  const NO_POSTER_ICON = appIcons.NO_POSTER_ICON
  const style = (page: string) => {
    if (page === 'home') return 'bg-secondary h-100'
    if (page === 'details') return 'rounded'
  }

  return (
    <div className={`d-flex justify-content-center align-items-center ${style(page)}`}>
      <i className={NO_POSTER_ICON} style={{ fontSize: '6em' }} />
    </div>
  )
}