import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuthInstance } from '~/plugins/firebase'

export type LoginFormData = {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const auth = getAuthInstance()
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: LoginFormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
      router.push('/users')
    })
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
