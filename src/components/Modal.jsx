//scss
import '../assets/style/modal.scss';

export default function Modal({children}) {
  return (
    <div className='modal'>
      {children}
    </div>
  )
}
