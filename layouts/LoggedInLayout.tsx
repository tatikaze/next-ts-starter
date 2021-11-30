import React from 'react'
import { LoggedIn } from '~/components/common/LoggedIn'
import { useUser } from '~/hooks/resources'
import { Header } from '~/components/common/Header'

type Props = {
  children?: React.ReactNode
}

export const LoggedInLayout: React.FC<Props> = (props: Props) => {
  const { user, loading } = useUser()
  return (
    <>
      <LoggedIn user={user} loading={loading}>
        <Header user={user} loading={loading} />
        {props.children}
      </LoggedIn>
    </>
  )
}
