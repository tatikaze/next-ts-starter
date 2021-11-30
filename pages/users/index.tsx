import React from 'react'
import { LoggedInLayout } from '~/layouts/LoggedInLayout'
import { HelloRequest } from '~/components/users/HelloRequest'
import { JsonRequest } from '~/components/users/JsonRequest'

const UsersIndex: React.FC = () => {
  return (
    <LoggedInLayout>
      <HelloRequest />
      <JsonRequest />
    </LoggedInLayout>
  )
}

export default UsersIndex
