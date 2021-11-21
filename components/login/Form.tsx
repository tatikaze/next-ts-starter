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
  const onSubmit = (data: LoginFormData) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => router.push('/users'))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: true })}
        type="email"
        placeholder="email"
      />
      <input
        {...register('password', { required: true })}
        type="password"
        placeholder="password"
      />
      <input type="submit" />
    </form>
  )
}
