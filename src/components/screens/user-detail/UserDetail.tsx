import { Link, useParams } from 'react-router-dom'
import DetailForm from './detailForm/DetailForm'

const UserDetail = () => {
  const { id } = useParams()

  return (
    <>
      <Link className='h2' to='/'>
        Back
      </Link>
      <div>
        <h2>User id - {id}</h2>
        <DetailForm />
      </div>
    </>
  )
}

export default UserDetail
