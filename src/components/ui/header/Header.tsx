import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Eye } from '../../../assets/icons/Eye'
import { EyeHide } from '../../../assets/icons/EyeHide'
import { auth } from '../../../firebase'
import InputGroup from '../input/input'
import Modal from '../modal/Modal'
import styles from './Header.module.scss'

interface FormData {
  email: string
  password: string
}

const Header = () => {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [passShow, setPassShow] = useState<boolean>(false)

  const toggleModal = () => {
    setModalActive(true)
  }

  const togglePassword = (e: React.MouseEvent) => {
    e.stopPropagation()
    setPassShow(!passShow)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit = (formData: FormData) => {
    signIn(formData)
  }

  const signIn = async (formData: FormData) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      reset()
      setModalActive(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    document.body.classList.toggle('stop_scroll')
  }, [modalActive])

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.auth} onClick={() => toggleModal()}>
          <img src='/icons/user.svg' alt='user-ico' />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2 className={styles.title}>Log in</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputGroup
            labelName={'User email'}
            labelFor={'userMail'}
            type={'text'}
            input={{
              ...register('email', {
                required: 'Mail is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Enter valid email'
                }
              })
            }}
            errors={errors?.email}
            errorMessage={errors?.email?.message}
          />
          <InputGroup
            labelName={'User password'}
            labelFor={'userPass'}
            type={passShow ? 'text' : 'password'}
            input={{
              ...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'Only numbers and letters'
                },
                minLength: {
                  value: 6,
                  message: 'Min length 6 digits'
                }
              })
            }}
            errors={errors?.password}
            errorMessage={errors?.password?.message}
            customElement={
              <div className={styles.show} onClick={e => togglePassword(e)}>
                {passShow ? (
                  <EyeHide width={20} height={20} stroke={'240, 248, 255'} />
                ) : (
                  <Eye width={20} height={20} fill={'240, 248, 255'} />
                )}
              </div>
            }
          />
          <button className={styles.btn}>Submit</button>
        </form>
      </Modal>
    </header>
  )
}

export default Header
