import React from 'react'
import { LoggedInLayout } from '~/layouts/LoggedInLayout'
import { TokenCopy } from '~/components/common/TokenCopy'
import { Logout } from '~/components/common/Logout'

const UsersIndex: React.FC = () => {
  return (
    <LoggedInLayout>
      <TokenCopy />
      <Logout />
    </LoggedInLayout>
  )
}

export default UsersIndex
