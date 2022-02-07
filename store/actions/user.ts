import { useEffect, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import type { User, AuthError, IdTokenResult } from 'firebase/auth'
import { RootContext, DispatchContext } from '../index'
import { getAuthInstance } from '~/plugins/firebase'

type UseUser = {
  user: User
  loading: boolean
  error: AuthError
  token: IdTokenResult
}

export const useUser = (): UseUser => {
  const [user, loading, error] = useAuthState(getAuthInstance())
  const { token } = useContext(RootContext)
  useEffect(() => {
    if (user) {
      user
        .getIdTokenResult(true)
        .then((token: IdTokenResult) => setToken(token))
    }
  }, [user])

  const dispatch = useContext(DispatchContext)

  const setToken = (token: IdTokenResult) => {
    dispatch({
      type: 'SET_TOKEN',
      payload: {
        token: token,
      },
    })
  }

  return { user, loading, error, token }
}
