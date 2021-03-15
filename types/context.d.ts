import firebase from 'firebase'

export type ActionType = {
  type: string
  payload: {
    count?: number
    token?: firebase.auth.IdTokenResult
  }
}

export type RootState = {
  count: number
  token: firebase.auth.IdTokenResult
}
