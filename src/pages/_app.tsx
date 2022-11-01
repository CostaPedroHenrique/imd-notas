import type { AppProps } from 'next/app'
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  const { ToastContainer } = createStandaloneToast()
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  )
}
