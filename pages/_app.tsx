import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { theme } from '~/styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
