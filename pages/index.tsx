import Head from 'next/head'
import HeroBlock from "../components/HomePage/HeroBlock"
import BrandBlock from "../components/HomePage/BrandBlock"
import connectMongo, {IdToStr} from "../DB"
import {FuelCarModel, IFuelCar} from "../models/FuelCar.module"
import {ElectricCarModel, IElectricCar} from "../models/ElectricCar.model"
import {getCars, getInitialFilterOptions} from "./api/filter"
import FilterBlock from "../components/HomePage/FilterBlock";
import CarsBlock from "../components/HomePage/CarsBlock";


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
                    />

                <FilterBlock
                    electricDefaultOptions={props.electricFilterOptions}
                    fuelDefaultOptions={props.fuelFilterOptions}
                    />

                <CarsBlock/>
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
        revalidate: 60*60*12 // every 12 hours
    }
}
