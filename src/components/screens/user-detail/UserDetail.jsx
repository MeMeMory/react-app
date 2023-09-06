// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import InputGroup from '../../ui/input/input'
import UseUser from './hooks/useUser'
import styles from './userDetail.module.css'

const UserDetail = () => {
	const { id } = useParams()
	// const [queryParams, setQueryParams] = useState({})

	const { data, isLoading } = UseUser(id)

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	if (isLoading) return <p>Loading...</p>

	// if (data) {
	// 	setValue('name', data?.name || '')
	// 	setValue('email', data?.email || '')
	// 	setValue('phone', data?.phone || '')
	// 	setValue('username', data?.username || '')
	// 	setValue('city', data?.address?.city || '')
	// 	setValue('street', data?.address?.street || '')
	// }
	console.log(data)
	const onSubmit = formData => {
		console.log(formData)
	}

	return (
		<div>
			<Link className='h2' to='/'>
				Back
			</Link>
			{
				<>
					<h2>User id - {data.id}</h2>
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
								...register('email', { required: 'Email is required' }),
							}}
							errors={errors?.email}
							errorMessage={errors?.email?.message}
						/>
						<InputGroup
							labelName={'User phone'}
							labelFor={'userPhone'}
							type={'text'}
							input={{
								...register('phone', { required: 'Phone is required' }),
							}}
							errors={errors?.phone}
							errorMessage={errors?.phone?.message}
						/>
						<InputGroup
							labelName={'User username'}
							labelFor={'userUsername'}
							type={'text'}
							input={{
								...register('username', { required: 'Username is required' }),
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
				</>
			}
		</div>
	)
}

export default UserDetail
