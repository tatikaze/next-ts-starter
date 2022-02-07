import React from 'react'
import { useRouter } from 'next/router'
import { getAuthInstance } from '~/plugins/firebase'

export const Logout: React.FC = () => {
  const router = useRouter()
  const auth = getAuthInstance()

  const onLogout = () => {
    auth.signOut()
    router.push('/login')
  }

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
