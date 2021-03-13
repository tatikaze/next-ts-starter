import React from 'react'

type Props = {
  children: React.ReactNode
}

export const LoggedIn: React.FC<Props> = (props: Props) => {
  return <>{props.children}</>
}
