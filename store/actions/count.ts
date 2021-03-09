import { useContext } from 'react'
import { RootContext, DispatchContext } from '../index'

type UseCount = {
  count: number
  increase_count: () => void
}

export const useCount = (): UseCount => {
  const { count } = useContext(RootContext)
  const dispatch = useContext(DispatchContext)
  const increase_count = () =>
    dispatch({
      type: 'INCREASE_COUNT',
      payload: {
        count,
      },
    })

  return { count, increase_count }
}
