import { useQuery } from '@tanstack/react-query'
import { IUser } from '../../../../types/users.interface'
import { UserService } from '../../../services/user.service'

const UseUser = () => {
  return useQuery<IUser[], Error>(['users'], () => UserService.getAll())
}

export default UseUser
