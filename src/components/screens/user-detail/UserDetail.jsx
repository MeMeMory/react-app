import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import UseUser from './hooks/useUser'
import styles from './userDetail.module.css'

const UserDetail = () => {
	const { id } = useParams()
	const { data, isLoading } = UseUser(id)

	console.log(data)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: data?.name || '',
			email: data?.email || '',
			phone: data?.phone || '',
			username: data?.username || '',
			city: data?.address?.city || '',
			street: data?.address?.street || '',
		},
	})

	const onSubmit = data => {
		console.log(data)
	}

	if (isLoading) return <p>Loading...</p>

	return (
		<div>
			<Link className='h2' to='/'>
				Back
			</Link>
			{
				<>
					<h2>User id - {data.id}</h2>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.form_group}>
							<label htmlFor='userName'>User name</label>
							<input
								id='userName'
								{...register('name', { required: 'Name is required' })}
								type='text'
							/>
							{errors?.name?.message && (
								<p className={styles.error_message}> Name is required</p>
							)}
						</div>
						<div className={styles.form_group}>
							<label htmlFor='userEmail'>User email</label>
							<input
								id='userEmail'
								{...register('email', { required: 'Email is required' })}
								type='text'
							/>
							{errors?.name?.message && (
								<p className={styles.error_message}> Email is required</p>
							)}
						</div>
						<div className={styles.form_group}>
							<label htmlFor='userPhone'>User phone</label>
							<input
								id='userPhone'
								{...register('phone', { required: 'Phone is required' })}
								type='text'
							/>
							{errors?.name?.message && (
								<p className={styles.error_message}> Phone is required</p>
							)}
						</div>
						<div className={styles.form_group}>
							<label htmlFor='userUsername'>User username</label>
							<input
								id='userUsername'
								{...register('username', { required: 'Username is required' })}
								type='text'
								value={data.username}
							/>
							{errors?.name?.message && (
								<p className={styles.error_message}> Username is required</p>
							)}
						</div>

						<div className={styles.form_group}>
							<label htmlFor='userCity'>User city</label>
							<input id='userCity' {...register('city')} type='text' />
						</div>
						<div className={styles.form_group}>
							<label htmlFor='userStreet'>User street</label>
							<input id='userStreet' {...register('street')} type='text' />
						</div>
						<button className={styles.btn}>Submit</button>
					</form>
				</>
			}
		</div>
	)
}

export default UserDetail
