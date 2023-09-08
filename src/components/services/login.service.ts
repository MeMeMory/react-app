import { auth, googleProvider } from '@/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

export const LoginService = {
  async createUser(formData) {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
    } catch (err) {
      console.log(err)
    }
  },
  async createWithGoggle() {
    try {
      await createUserWithEmailAndPassword(auth, googleProvider)
    } catch (err) {
      console.log(err)
    }
  },
  async signIn(formData) {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
    } catch (err) {
      console.log(err)
    }
  }
}
