import { createContext, useState } from 'react'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState()

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
