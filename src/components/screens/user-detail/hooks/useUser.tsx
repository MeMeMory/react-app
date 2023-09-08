import { useQuery } from '@tanstack/react-query'
import { IUser } from '../../../../types/users.interface'
import { UserService } from '../../../services/user.service'

const UseUser = (id: string | undefined) => {
  return useQuery<IUser, Error>(['users', id], () => UserService.getById(id))
}

export default UseUser
