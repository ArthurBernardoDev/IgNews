import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
    </>
  )
}

export default MyApp
