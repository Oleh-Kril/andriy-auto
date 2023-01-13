import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BrandBlock from "../components/HomePage/BrandBlock"

export default function Home() {

    return (
        <>
            <Head>
                <title>Andriy Auto</title>
                <meta name="description" content="-"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <main>
                <section className={styles.section}>
                    <h1 id={styles.title}>ПРИВЕЗЕМО АВТО МРІЇ</h1>
                </section>
                <BrandBlock/>
            </main>
        </>
    )
}
