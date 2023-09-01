/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './userRow.module.css'

const UserRow = ({ user }) => {
	const [data, setData] = useState(false)

	return (
		<div className={styles.table_row}>
			<div>
				<h4>{user.id}</h4>
			</div>
			<div>
				<h4>{user.name}</h4>
			</div>
			<div>
				<h4>{user.email}</h4>
			</div>
			<div>
				<h4>{user?.phone}</h4>
			</div>
			<div>
				<h4>{user?.username}</h4>
			</div>
			<div>
				{!data ? (
					<Link className='show' onClick={() => setData(true)}>
						show
					</Link>
				) : (
					<>
						<div className={styles.info_group}>
							<h4>{user?.address?.city}</h4>
							<span>city</span>
						</div>
						<div className={styles.info_group}>
							<h4>{user?.address?.street}</h4>
							<span>street</span>
						</div>
					</>
				)}
			</div>
			<div>
				<Link className={styles.edit} to={`/user/${user.id}`}>
					edit
				</Link>
			</div>
		</div>
	)
}
export default UserRow
