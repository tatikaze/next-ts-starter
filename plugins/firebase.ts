import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebase-key'

let _app: firebase.app.App = null

export const getApp = (): firebase.app.App => {
  if (_app) return _app
  if (firebase.apps.length > 0) {
    return (_app = firebase.app())
  } else {
    return (_app = firebase.initializeApp(firebaseConfig))
  }
}

export const getAuth = (): firebase.auth.Auth => {
  return getApp().auth()
}
