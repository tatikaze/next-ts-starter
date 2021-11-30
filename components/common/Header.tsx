import React from 'react'
import { chakra, Flex } from '@chakra-ui/react'
import type { User } from 'firebase/auth'

type Props = {
  user: User
  loading: boolean
}

export const Header: React.FC<Props> = (props: Props) => {
  if (props.loading) return <>...loading</>

  return (
    <chakra.header display="flex" backgroundColor="gray.900" textColor="white">
      <chakra.h1 mx={4} my={2}>
        {process.env.title}
      </chakra.h1>
      <Flex mx={4} flexGrow={1} justifyContent="flex-end" alignItems="center">
        {props.user.email}
      </Flex>
    </chakra.header>
  )
}
