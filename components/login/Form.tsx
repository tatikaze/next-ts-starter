import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { getAuth } from '~/plugins/firebase'

export type LoginFormData = {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const auth = getAuth()
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data: LoginFormData) => {
    try {
      const login = await auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((s) => {
          router.push('/users')
        })
    } catch {
      const create = await auth
        .signInWithEmailAndPassword(data.email, data.password)
        .then((s) => {
          router.push('/users')
        })
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
