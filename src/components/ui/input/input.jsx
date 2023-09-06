/* eslint-disable react/prop-types */
import styles from './input.module.css'

const InputGroup = ({
	labelName,
	labelFor,
	type,
	input,
	errors,
	errorMessage,
	customElement,
}) => {
	return (
		<div className={styles.form_group}>
			<label htmlFor={labelFor}>{labelName}</label>
			{customElement ? (
				<div className={styles.input_group}>
					<input id={labelFor} {...input} type={type} />
					{customElement}
				</div>
			) : (
				<input id={labelFor} {...input} type={type} />
			)}
			{errors && (
				<p className={styles.error_message} role='alert'>
					{errorMessage}
				</p>
			)}
		</div>
	)
}

export default InputGroup
