/* eslint-disable */
const admin = require('firebase-admin')
const serviceAccount = require('./firebase-admin-key.json')
require('dotenv').config()

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const userProperties = {
  email: process.env.DEFAULT_USER_EMAIL,
  password: process.env.DEFAULT_USER_PASSWORD,
}

app
  .auth()
  .createUser(userProperties)
  .then(() => {
    console.log('Successfully create user', userProperties)
    process.exit(0)
  })
  .catch(() => {
    console.log('email is already exist')
    process.exit(0)
  })
