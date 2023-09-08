import styles from './Home.module.scss'
import UserTable from './user-table/UserTable'

const Home = () => {
  return (
    <div className='container'>
      <h1>User list</h1>
      <div className={styles.table}>
        <UserTable />
      </div>
    </div>
  )
}

export default Home
