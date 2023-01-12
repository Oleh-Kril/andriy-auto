import Head from 'next/head'
import { Jura } from '@next/font/google'
import styles from '../styles/Home.module.css'

const jura = Jura({ subsets: ['latin', 'cyrillic'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andriy Auto</title>
        <meta name="description" content="-" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main className={jura.className}>
        <div >
          <h1>Всі авто</h1>
        </div>
      </main>
    </>
  )
}
