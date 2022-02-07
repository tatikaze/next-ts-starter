import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { firebaseConfig } from './firebase-key'

let _app: FirebaseApp = null

export const getApp = (): FirebaseApp => {
  if (_app) return _app
  return (_app = initializeApp(firebaseConfig))
}

export const getAuthInstance = (): Auth => {
  getApp()
  return getAuth()
}
