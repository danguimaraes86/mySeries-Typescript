
type Props = {
  title: String
}

export default function ModalHeader({ title }: Props) {
  return (
    <div className='modal-header bg-dark text-info border-0'>
      <h5 className='modal-title'>{title}</h5>
      <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' />
    </div>
  )
}
