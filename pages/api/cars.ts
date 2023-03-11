import {ElectricCarModel, IElectricCar} from "../../models/ElectricCar.model"
import {FuelCarModel, IFuelCar} from "../../models/FuelCar.module"
import connectMongo, {IdToStr} from "../../DB"
import {NextApiRequest, NextApiResponse} from "next"

export async function getCars(): Promise<[electricCars: IElectricCar[], fuelCars: IFuelCar[]]> {
    await connectMongo()
    const electricCars = await ElectricCarModel.find({}).exec() as IElectricCar[]
    const fuelCars = await FuelCarModel.find({}).exec() as IFuelCar[]

    return [IdToStr(electricCars), IdToStr(fuelCars)]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<[IElectricCar[], IFuelCar[]]>
) {
    const {method} = req
    switch (method) {
        case 'GET':
            try {
                const [electricCars, fuelCars] = await getCars()

                return res.status(200).json([electricCars, fuelCars])
            }catch (e) {
                console.log(e)
            }
    }

}
