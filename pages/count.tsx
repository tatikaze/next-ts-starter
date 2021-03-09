import React from 'react'
import { useCount } from '~/store/actions'

export const Count: React.FC = () => {
  const { count, increase_count } = useCount()

  return (
    <div>
      <p>current count: {count}</p>
      <button onClick={increase_count}>increase</button>
    </div>
  )
}

export default Count
