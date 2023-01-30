import Head from 'next/head'
import HeroBlock from "../components/HomePage/HeroBlock"
import BrandBlock from "../components/HomePage/BrandBlock"
import connectMongo, {IBase} from "../DB"
import {FuelCarModel} from "../models/FuelCar.module"
import {ElectricCarModel} from "../models/ElectricCar.model"


export default function Home(props: any) {
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
                <BrandBlock
                    electricBrands={props.electricBrands}
                    fuelBrands={props.fuelBrands}/>
            </main>
        </>
    )
}

export async function getStaticProps() {
    await connectMongo()
    const IdToStr = (array: Array<IBase> ) =>{
        return array.map((doc: any) => {
            const item = doc.toObject()
            item._id = item._id.toString()
            return item
        })
    }
    const electricBrands =  await ElectricCarModel.find({}, "brand")
    const fuelBrands = await FuelCarModel.find({}, "brand")

    return {
        props: {
            electricBrands: IdToStr(electricBrands),
            fuelBrands: IdToStr(fuelBrands),
        },
        revalidate: 60*60*12 // every 12 hours
    }
}
