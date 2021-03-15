import React from 'react'
import type firebase from 'firebase'

type Props = {
  user: firebase.User
  loading: boolean
}

export const Header: React.FC<Props> = (props: Props) => {
  if (props.loading) return <>...loading</>
  return (
    <>
      <h1>{process.env.title}</h1>
      <div>Welcome {props.user.email}</div>
    </>
  )
}
