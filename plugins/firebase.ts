import firebase from 'firebase/app'
import firebaseConfig from './firebase-key'

let _app = null

export const getApp = (): firebase.app.App => {
  if (_app) return _app
  if (firebase.app.length > 0) {
    return (_app = firebase.app())
  } else {
    return (_app = firebase.initializeApp(firebaseConfig))
  }
}

export const getAuth = (): firebase.auth.Auth => {
  return getApp().auth()
}
