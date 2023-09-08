import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../../../../types/users.interface'
import styles from './UserRow.module.scss'

interface UserRowProps {
  user: IUser
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const [data, setData] = useState<boolean>(false)

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
          <div className={styles.show} onClick={() => setData(true)}>
            show
          </div>
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
