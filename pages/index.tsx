import Head from 'next/head'
import HeroBlock from "../components/HomePage/HeroBlock"
import BrandBlock from "../components/HomePage/BrandBlock"
import connectMongo, {IdToStr} from "../DB"
import {FuelCarModel, IFuelCar} from "../models/FuelCar.module"
import {ElectricCarModel, IElectricCar} from "../models/ElectricCar.model"
import {getInitialFilterOptions} from "./api/filter"
import FilterBlock from "../components/HomePage/FilterBlock"
import CarsBlock from "../components/HomePage/CarsBlock"
import {getCars} from "./api/cars"
import {createContext, useState} from "react"

type ICarsState = {
    electricCarsState: IElectricCar[],
    fuelCarsState: IFuelCar[],
    setElectricCarsState: Function,
    setFuelCarsState: Function,
}

type IFilterState = {
    isElectricState: boolean,
    setIsElectricState: Function
}

export const CarsContext = createContext<ICarsState>({
    electricCarsState: [],
    fuelCarsState: [],
    setElectricCarsState: () => {console.log("set electric cars fails")},
    setFuelCarsState: () => {console.log("set fuel cars fails")}
})

export const FilterContext = createContext<IFilterState>({
    isElectricState: false,
    setIsElectricState: () => {console.log("set isElectric state fails")}
})

export default function Home(props: any) {
    const [electricCarsState, setElectricCarsState] = useState(props.electricCars)
    const [fuelCarsState, setFuelCarsState] = useState(props.fuelCars)
    const [isElectricState, setIsElectricState] = useState(false)

    return (
        <FilterContext.Provider value={{isElectricState, setIsElectricState}}>
            <CarsContext.Provider value={{electricCarsState, setElectricCarsState, fuelCarsState, setFuelCarsState}}>
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
            </CarsContext.Provider>
        </FilterContext.Provider>
    )
}

export async function getStaticProps() {
    await connectMongo()

    const electricBrands =  await ElectricCarModel.find({}, "brand")
    const fuelBrands = await FuelCarModel.find({}, "brand")

    const [electricCars, fuelCars] = await getCars()

    const [electricFilterOptions, fuelFilterOptions] = getInitialFilterOptions(electricCars, fuelCars)

    return {
        props: {
            electricBrands: IdToStr(electricBrands),
            fuelBrands: IdToStr(fuelBrands),
            electricFilterOptions,
            fuelFilterOptions,
            electricCars,
            fuelCars
        },
        revalidate: 1 // every 12 hours
    }
}

