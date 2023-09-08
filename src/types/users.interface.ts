export interface IUser {
	id: number
	name: string
	email: string
	phone?: string
	username?: string
	address?: {
		city?: string
		street?: string
	}
}

export interface IUserData extends Omit<IUser, 'id'> {}
