import React from 'react'
import axios from 'axios'
import { useUser } from '~/store/actions'

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
  return <button onClick={handleSubmit}>submit</button>
}
