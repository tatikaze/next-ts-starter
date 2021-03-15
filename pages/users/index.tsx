import React from 'react'
import { LoggedInLayout } from '~/layouts/LoggedInLayout'
import { HelloRequest } from '~/components/users/HelloRequest'

const UsersIndex: React.FC = () => {
  return (
    <LoggedInLayout>
      <HelloRequest />
    </LoggedInLayout>
  )
}

export default UsersIndex
