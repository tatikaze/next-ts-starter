import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { theme } from '~/styles/theme'
import { RootProvider } from '~/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RootProvider>
  )
}

export default MyApp
