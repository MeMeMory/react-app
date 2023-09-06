import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
// import AuthProvider from './components/providers/AuthProvider'
import Router from './components/ui/Router'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* <AuthProvider> */}
			<Router />
			{/* </AuthProvider> */}
		</QueryClientProvider>
	</React.StrictMode>
)
