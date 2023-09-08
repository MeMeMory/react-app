import { ReactNode } from 'react'

import { Close } from '../../../assets/icons/Close'
import styles from './Modal.module.scss'

interface ModalProps {
  active: boolean
  setActive: (active: boolean) => void
  children: ReactNode
}

// eslint-disable-next-line react/prop-types
const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        <div className={styles.close_modal} onClick={() => setActive(false)}>
          <Close width={20} height={20} fill={'#000'} />
        </div>
        <div className={styles.modal_body}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
