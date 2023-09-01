import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user.service'

const UseUser = () => {
	return useQuery(['users'], () => UserService.getAll())
}

export default UseUser
