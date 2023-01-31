import {Schema, model, models, Types} from 'mongoose'
import {ICarBase, CarBaseSchema} from './CarBase.model'

export interface IFuelCar extends ICarBase{
    fuelType: string,
    fuelConsumption: number

}

const FuelCarSchema = new Schema<IFuelCar>({
    ...CarBaseSchema.obj,
    fuelType: {type: String, required: true},
    fuelConsumption: Number
}, { collection: 'FuelCars' })

export const FuelCarModel = models?.FuelCars || model<IFuelCar>('FuelCars', FuelCarSchema)
