import React from 'react'
import { LoggedIn } from '~/components/common/LoggedIn'

type Props = {
  children: React.ReactNode
}

export const LoggedInLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <LoggedIn>
        <h1>{process.env.title}</h1>
        {props.children}
      </LoggedIn>
    </>
  )
}
