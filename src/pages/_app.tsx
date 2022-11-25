import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { AuthProvider } from '@/context/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
