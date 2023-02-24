// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {NextApiRequest, NextApiResponse} from 'next'
import connectMongo from '../../DB'
import {ElectricCarModel, IElectricCar} from "../../models/ElectricCar.model"
import {FuelCarModel, IFuelCar} from "../../models/FuelCar.module"

type Range = {
    min: number,
    max: number
}

export type FilterOptions = {
    price: Range,
    fuelConsumption?: Range,
    range?: Range,
    year: Range,
    model: Array<String>,
    capacity: Array<Number>,
    bodyType: Array<String>,
    transmission: Array<String>,
    drive: Array<String>,
    color: Array<String>,
    fuelType?: Array<String>

}

export async function getCars(): Promise<[electricCars: IElectricCar[], fuelCars: IFuelCar[]]> {
    await connectMongo()
    const electricCars = await ElectricCarModel.find({}).exec() as IElectricCar[]
    const fuelCars = await FuelCarModel.find({}).exec() as IFuelCar[]

    return [electricCars, fuelCars]
}
export function getInitialFilterOptions(electricCars: IElectricCar[], fuelCars: IFuelCar[])
    : [electricFilterOptions: FilterOptions, fuelFilterOptions: FilterOptions]
{
    const electricCarsLastIdx = electricCars.length - 1
    const fuelCarsLastIdx = fuelCars.length - 1

    const GetVariationsElectric =
        (property: string) => Array.from(new Set((electricCars.map(car => car[property as keyof IElectricCar]))))
    const GetVariationsFuel =
        (property: string) => Array.from(new Set(fuelCars.map(car => car[property as keyof IFuelCar])))

    const electricFilterOptions: FilterOptions ={
        price: {
            max: electricCars.sort((a, b) => b.price - a.price)[0].price,
            min: electricCars[electricCarsLastIdx].price
        },
        year: {
            max: electricCars.sort((a, b) => b.year - a.year)[0].year,
            min: electricCars[electricCarsLastIdx].year
        },
        range: {
            max: electricCars.sort((a, b) => b.range - a.range)[0].range,
            min: electricCars[electricCarsLastIdx].range
        },
        model: GetVariationsElectric("model") as Array<String>,
        capacity: GetVariationsElectric("capacity") as Array<Number>,
        bodyType: GetVariationsElectric("bodyType") as Array<String>,
        transmission: GetVariationsElectric("transmission") as Array<String>,
        drive: GetVariationsElectric("drive") as Array<String>,
        color: GetVariationsElectric("color") as Array<String>,
    }
    const fuelFilterOptions: FilterOptions = {
        price: {
            max: fuelCars.sort((a, b) => b.price - a.price)[0].price,
            min: fuelCars[fuelCarsLastIdx].price
        },
        year: {
            max: fuelCars.sort((a, b) => b.year - a.year)[0].year,
            min: fuelCars[fuelCarsLastIdx].year
        },
        fuelConsumption: {
            max: fuelCars.sort((a, b) => b.fuelConsumption - a.fuelConsumption)[0].fuelConsumption,
            min: fuelCars[fuelCarsLastIdx].fuelConsumption
        },
        model: GetVariationsFuel("model") as Array<String>,
        capacity: GetVariationsFuel("capacity") as Array<Number>,
        bodyType: GetVariationsFuel("bodyType") as Array<String>,
        transmission: GetVariationsFuel("transmission") as Array<String>,
        drive: GetVariationsFuel("drive") as Array<String>,
        color: GetVariationsFuel("color") as Array<String>,
        fuelType: GetVariationsFuel("fuelType") as Array<String>
    }

    return [electricFilterOptions, fuelFilterOptions]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<[FilterOptions, FilterOptions]>
) {

    const {method} = req
    switch (method) {
        case 'GET':
            try {
                const [electricCars, fuelCars] = await getCars()

                const [electricFilterOptions, fuelFilterOptions] = getInitialFilterOptions(electricCars, fuelCars)

                return res.status(200).json([electricFilterOptions, fuelFilterOptions])
            }catch (e) {
                console.log(e)
            }
    }

}
