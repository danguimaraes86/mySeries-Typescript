import { FirebaseError } from 'firebase/app'
import { NextApiRequest, NextApiResponse } from 'next'
import { registration } from '../../../authentication'

export default async function createUserAPI(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, displayName } = req.body
  try {
    const user = await registration(email, password, displayName)
    return res.status(200).json(user)
  } catch (error) {
    const e = error as FirebaseError
    return res.status(400).json({ name: e.name, code: e.code, error: e.customData })
  }
}
