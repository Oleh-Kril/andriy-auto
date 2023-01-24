import Head from 'next/head'
import HeroBlock from "../components/HomePage/HeroBlock"
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
                <HeroBlock/>
                <BrandBlock/>
            </main>
        </>
    )
}
