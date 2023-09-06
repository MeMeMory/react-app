import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import UserDetail from '../screens/user-detail/UserDetail'
import Layout from './Layout'

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<UserDetail />} path='/user/:id' />

					<Route element={<div>Not found</div>} path='*' />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default Router
