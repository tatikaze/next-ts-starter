import { useEffect, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'
import { RootContext, DispatchContext } from '../index'
import { getAuth } from '~/plugins/firebase'

type UseUser = {
  user: firebase.User
  loading: boolean
  error: firebase.auth.Error
  token: firebase.auth.IdTokenResult
}

export const useUser = (): UseUser => {
  const [user, loading, error] = useAuthState(getAuth())
  const { token } = useContext(RootContext)
  useEffect(() => {
    if (user) {
      user.getIdTokenResult(true).then((token) => setToken(token))
    }
  }, [user])

  const dispatch = useContext(DispatchContext)

  const setToken = (token: firebase.auth.IdTokenResult) =>
    dispatch({
      type: 'SET_TOKEN',
      payload: {
        token: token,
      },
    })

  return { user, loading, error, token }
}
