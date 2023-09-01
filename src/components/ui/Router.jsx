import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import UserDetail from '../screens/user-detail/UserDetail'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<UserDetail />} path='/user/:id' />

				<Route element={<div>Not found</div>} path='*' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
