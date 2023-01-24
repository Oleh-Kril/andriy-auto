import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navigation from "../components/Navigation"
import { Jura } from '@next/font/google'
const jura = Jura({ subsets: ['latin', 'cyrillic'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={jura.className}>
        <Navigation/>
        <Component {...pageProps} />
      </div>

  )
}
