import { useState } from 'react'
import UseUser from '../hooks/useUser'
import TableHead from './table-head/TableHead'
import UserRow from './user-row/UserRow'
import styles from './userTable.module.css'

const UserTable = () => {
	const { data, isLoading, error } = UseUser()
	const [sortType, setSortType] = useState('id')

	const handleSortChange = type => {
		if (type.length < 1) return
		setSortType(type)
	}

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>There are some error {error.message}</p>

	const sortData = [...data].sort((a, b) => {
		switch (sortType) {
			case 'id':
				return a[sortType] - b[sortType]
			case 'name':
				return a[sortType].localeCompare(b[sortType])
			case 'email':
				return a[sortType].localeCompare(b[sortType])
			case 'phone':
				return a[sortType] - b[sortType]
			case 'username':
				return a[sortType].localeCompare(b[sortType])
		}
	})

	return (
		<>
			<TableHead onClick={e => handleSortChange(e.target.id)} />
			<div className={styles.table_body}>
				{sortData.length ? (
					sortData.map(user => <UserRow key={user.id} user={user} />)
				) : (
					<div>
						<h2>There are no Users</h2>
					</div>
				)}
			</div>
		</>
	)
}

export default UserTable
