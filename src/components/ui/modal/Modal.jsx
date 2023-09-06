import { Close } from './../../../assets/icons/Close'
import styles from './modal.module.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ active, setActive, children }) => {
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
