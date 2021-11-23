import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { RootProvider } from '~/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  )
}

export default MyApp
