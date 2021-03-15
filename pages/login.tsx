import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '~/store/actions'
import { LoginForm } from '~/components/login/Form'

const LoginPage: React.FC = () => {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/users')
    }
  }, [user, loading])

  return (
    <>
      <LoginForm />
    </>
  )
}

export default LoginPage
