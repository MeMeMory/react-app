import { IUser } from '@/types/users.interface'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const UserService = {
  async getAll(): Promise<IUser[]> {
    const respond = await axios.get<IUser[]>(`${URL}`)
    return respond.data
  },
  async getById(id: string | undefined): Promise<IUser> {
    const respond = await axios.get<IUser>(`${URL}/${id}`)
    return respond.data
  }
  // async createUser(data: IUserData) {
  // 	return await axios.post(`${URL}`, data)
  // },
}
