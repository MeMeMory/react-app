import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { FormData } from '../../../../types/form.interface'
import Loader from '../../../ui/Loader'
import InputGroup from '../../../ui/input/input'
import UseUser from '../hooks/useUser'
import styles from './DetailForm.module.scss'

const DetailForm = () => {
  const { id } = useParams()
  // const [queryParams, setQueryParams] = useState({})

  const { data, isLoading } = UseUser(id)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = formData => {
    console.log(formData)
  }

  useEffect(() => {
    if (data) {
      setValue('name', data?.name || '')
      setValue('email', data?.email || '')
      setValue('phone', data?.phone || '')
      setValue('username', data?.username || '')
      setValue('city', data?.address?.city || '')
      setValue('street', data?.address?.street || '')
    }
  }, [data])

  if (isLoading) return <Loader />

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        labelName={'User name'}
        labelFor={'userName'}
        type={'text'}
        input={{ ...register('name', { required: 'Name is required' }) }}
        errors={errors?.name}
        errorMessage={errors?.name?.message}
      />
      <InputGroup
        labelName={'User email'}
        labelFor={'userEmail'}
        type={'text'}
        input={{
          ...register('email', { required: 'Email is required' })
        }}
        errors={errors?.email}
        errorMessage={errors?.email?.message}
      />
      <InputGroup
        labelName={'User phone'}
        labelFor={'userPhone'}
        type={'text'}
        input={{
          ...register('phone', { required: 'Phone is required' })
        }}
        errors={errors?.phone}
        errorMessage={errors?.phone?.message}
      />
      <InputGroup
        labelName={'User username'}
        labelFor={'userUsername'}
        type={'text'}
        input={{
          ...register('username', { required: 'Username is required' })
        }}
        errors={errors?.username}
        errorMessage={errors?.username?.message}
      />
      <InputGroup
        labelName={'User city'}
        labelFor={'userCity'}
        type={'text'}
        input={{ ...register('city') }}
      />
      <InputGroup
        labelName={'User street'}
        labelFor={'userStreet'}
        type={'text'}
        input={{ ...register('street') }}
      />
      <button className={styles.btn}>Submit</button>
    </form>
  )
}

export default DetailForm
