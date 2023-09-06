import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const UserService = {
	async getAll() {
		const respond = await axios.get(`${URL}`)
		return respond.data
	},
	async getById(id) {
		const respond = await axios.get(`${URL}/${id}`)
		return respond.data
	},
	async createUser(data) {
		return await axios.post(`${URL}`, data)
	},
}
