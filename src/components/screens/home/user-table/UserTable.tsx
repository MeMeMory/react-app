import { useState } from 'react'
import { IUser } from '../../../../types/users.interface'
import Error from '../../../ui/Error'
import Loader from '../../../ui/Loader'
import UseUser from '../hooks/useUser'
import styles from './UserTable.module.scss'
import TableHead from './table-head/TableHead'
import UserRow from './user-row/UserRow'

const UserTable = () => {
  const { data, isLoading, error } = UseUser()
  const [sortType, setSortType] = useState<string>('id')

  const handleSortChange = (type: string) => {
    console.log(type)

    if (type.length < 1) return
    setSortType(type)
  }

  if (isLoading) return <Loader />
  if (error) return <Error error={error.message} />

  const sortData: IUser[] = [...data].sort((a, b) => {
    switch (sortType) {
      case 'id':
        return a[sortType] - b[sortType]
      case 'name':
        return a[sortType].localeCompare(b[sortType])
      case 'email':
        return a[sortType].localeCompare(b[sortType])
      case 'phone':
        return (a[sortType] || '').localeCompare(b[sortType] || '')
      case 'username':
        return (a[sortType] || '').localeCompare(b[sortType] || '')
      default:
        return 0
    }
  })

  return (
    <>
      <TableHead
        onClick={(e: React.MouseEvent) =>
          handleSortChange((e.target as HTMLElement).id)
        }
      />
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
