import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import type firebase from 'firebase/compat'

type Props = {
  user: firebase.User
  loading: boolean
  children: React.ReactNode
}

export const LoggedIn: React.FC<Props> = (props: Props) => {
  const { user, loading } = props
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading])

  if (loading) return <>...loading</>
  return <>{props.children}</>
}
