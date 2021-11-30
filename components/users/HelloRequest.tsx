import React from 'react'
import axios from 'axios'
import { Button } from '@chakra-ui/react'
import { useUser } from '~/hooks/resources'

export const HelloRequest: React.FC = () => {
  const { token } = useUser()
  const handleSubmit = () => {
    axios
      .get('/api/hello', {
        headers: {
          authorization: `Bearer ${token.token}`,
        },
      })
      .then((res) => console.log(res.data))
  }
  return (
    <Button colorScheme="blue" onClick={handleSubmit}>
      テスト通信
    </Button>
  )
}
