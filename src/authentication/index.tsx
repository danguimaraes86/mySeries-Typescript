import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import app from '../libs/firebase'

const auth = getAuth(app)

export const registration = async (email: string, password: string, displayName: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(user, { displayName })
  return user
}
