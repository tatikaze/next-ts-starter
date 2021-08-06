import React from 'react'
import { LoggedInLayout } from '~/layouts/LoggedInLayout'
import { TokenCopy } from '~/components/common/TokenCopy'

const UsersIndex: React.FC = () => {
  return (
    <LoggedInLayout>
      <TokenCopy />
    </LoggedInLayout>
  )
}

export default UsersIndex
