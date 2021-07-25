import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Provider as NextAuthProvide } from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvide session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvide>
  )
}

export default MyApp
