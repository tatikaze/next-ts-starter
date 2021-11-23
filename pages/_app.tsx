import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RootProvider } from '~/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RootProvider>
  )
}

export default MyApp
