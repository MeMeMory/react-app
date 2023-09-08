import { InputHTMLAttributes, ReactNode } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import styles from './input.module.scss'

interface InputGroupProps {
  labelName: string
  labelFor: string
  type: string
  input: InputHTMLAttributes<HTMLInputElement>
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
  customElement?: ReactNode | undefined
}

const InputGroup: React.FC<InputGroupProps> = ({
  labelName,
  labelFor,
  type,
  input,
  errors,
  errorMessage,
  customElement
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
          {errorMessage as string}
        </p>
      )}
    </div>
  )
}

export default InputGroup
