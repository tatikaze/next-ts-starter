import React from 'react'
import { useUser } from '~/store/actions'

export const TokenCopy: React.FC = () => {
  const { token } = useUser()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(token.token)
  }

  return (
    <div>
      <button onClick={copyToClipboard}>Copy Token</button>
    </div>
  )
}
