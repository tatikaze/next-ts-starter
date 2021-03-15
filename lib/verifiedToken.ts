import { NextApiRequest } from 'next'
import type firebaseAdmin from 'firebase-admin'
import { getAuth } from '~/plugins/firebase-admin'

export const verifyRequest = async (req: NextApiRequest): Promise<boolean> => {
  const authToken: string = req.headers['authorization'] as string
  const rawToken: string = authToken?.replace('Bearer ', '')
  const decodedToken: firebaseAdmin.auth.DecodedIdToken = await verifyToken(
    rawToken
  ).catch(() => null)
  return decodedToken.uid !== undefined
}

export const verifyToken = async (
  token: string
): Promise<firebaseAdmin.auth.DecodedIdToken> => {
  const auth = getAuth()
  return await auth.verifyIdToken(token)
}
