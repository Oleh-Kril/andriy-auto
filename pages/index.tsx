import Head from 'next/head'
import HeroBlock from "../components/HomePage/HeroBlock"
import BrandBlock from "../components/HomePage/BrandBlock"
import connectMongo, {IdToStr} from "../DB"
import {FuelCarModel, IFuelCar} from "../models/FuelCar.module"
import {ElectricCarModel, IElectricCar} from "../models/ElectricCar.model"
import {getCars, getInitialFilterOptions} from "./api/filter"


export default function Home(props: any) {
    return (
        <>
            <Head>
                <title>Andriy Auto</title>
                <meta name="description" content="-"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo-black.svg" />
            </Head>
            <main>
                <HeroBlock/>
                <BrandBlock
                    electricBrands={props.electricBrands}
                    fuelBrands={props.fuelBrands}
                    electricFilterOptions={props.electricFilterOptions}/>
            </main>
        </>
    )
}

export async function getStaticProps() {
    await connectMongo()

    const electricBrands =  await ElectricCarModel.find({}, "brand")
    const fuelBrands = await FuelCarModel.find({}, "brand")

    const [electricCars, fuelCars] = await getCars()
    const [electricFilterOptions, fuelFilterOptions] = getInitialFilterOptions(electricCars, fuelCars)

    console.log(electricFilterOptions)
    console.log(fuelFilterOptions)
    return {
        props: {
            electricBrands: IdToStr(electricBrands),
            fuelBrands: IdToStr(fuelBrands),
            electricFilterOptions: electricFilterOptions,
            fuelFilterOptions: fuelFilterOptions
        },
        revalidate: 1 // every 12 hours
    }
}
