import React, { useReducer } from 'react'
import { initialState } from './initialState'
import { reducer } from './reducer'
import { ActionType } from '~/types'

export const RootContext = React.createContext(initialState)
export const DispatchContext = React.createContext(
  (() => true) as React.Dispatch<ActionType>
)

export const RootProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <RootContext.Provider value={state}>{children}</RootContext.Provider>
    </DispatchContext.Provider>
  )
}
