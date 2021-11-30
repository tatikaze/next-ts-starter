import React, { useState, Suspense } from 'react'
import { Button } from '@chakra-ui/react'

import { apiClient } from '~/lib/apiClient'
import type { ServiceUser } from '~/types/resources'

export const JsonRequest: React.FC = () => {
  const [data, setData] = useState<ServiceUser[]>(null)
  const handleSubmit = async () => {
    const res = await apiClient.posts.get()
    setData(res.body)
  }

  return (
    <>
      <Button colorScheme="blue" onClick={handleSubmit}>
        API通信
      </Button>
      <Suspense fallback={<div>loading</div>}>
        {data?.map((user: ServiceUser) => {
          return (
            <li key={user.id}>
              <div>{user.title}</div>
              <div>{user.body}</div>
            </li>
          )
        }) ?? null}
      </Suspense>
    </>
  )
}
