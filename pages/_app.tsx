import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Social from '../components/Social'
import Alerts from '../components/Alerts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Alerts />
      <Social></Social>
      <Logo></Logo>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
