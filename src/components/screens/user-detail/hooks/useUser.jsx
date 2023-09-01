import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user.service'

const UseUser = id => {
	console.log(UserService.getById(id))
	return useQuery(['user'], () => UserService.getById(id))
}

export default UseUser
