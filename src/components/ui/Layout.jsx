import Header from './header/Header'

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}

export default Layout
