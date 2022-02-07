import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getAuthInstance } from '~/plugins/firebase'

export type LoginFormData = {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const auth = getAuthInstance()
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data: LoginFormData) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      ).then(() => {
        router.push('/users')
      })
    } catch {
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        () => {
          router.push('/users')
        },
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" type="email" ref={register} placeholder="email" />
      <input
        name="password"
        type="password"
        ref={register}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  )
}
