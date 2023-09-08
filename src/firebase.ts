import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBHqoyd_O9N48_xyrbtq3iVO16E_MUP-lc',
  authDomain: 'react-admin-ca4c1.firebaseapp.com',
  projectId: 'react-admin-ca4c1',
  storageBucket: 'react-admin-ca4c1.appspot.com',
  messagingSenderId: '87694762736',
  appId: '1:87694762736:web:35bea76f03c968d956d835'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
