import { useEffect, useContext } from 'react'
import type { Auth, User, IdTokenResult } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RootContext, DispatchContext } from '~/store/index'
import { getAuthInstance } from '~/plugins/firebase'

type UseUser = {
  user: User
  loading: boolean
  error: Error
  token: IdTokenResult
}

export const useUser = (): UseUser => {
  const auth: Auth = getAuthInstance()
  const [user, loading, error] = useAuthState(auth)
  const { token } = useContext(RootContext)
  useEffect(() => {
    if (user) {
      user.getIdTokenResult(true).then((token) => setToken(token))
    }
  }, [user])

  const dispatch = useContext(DispatchContext)

  const setToken = (token: IdTokenResult) =>
    dispatch({
      type: 'SET_TOKEN',
      payload: {
        token: token,
      },
    })

  return { user, loading, error, token }
}
