import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user.service'

const UseUser = id => {
	return useQuery(['users', id], () => UserService.getById(id))
}

export default UseUser
