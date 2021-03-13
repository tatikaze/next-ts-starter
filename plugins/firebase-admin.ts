import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from '~/plugins/firebase-admin-key.json'

let _app = null

export const getApp = (): admin.app.App => {
  if (_app) return _app
  if (admin.apps.length > 0) {
    return (_app = admin.app())
  } else {
    return (_app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    }))
  }
}

export const getAuth = (): admin.auth.Auth => {
  return getApp().auth()
}
