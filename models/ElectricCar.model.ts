import {Schema, model, models, Types} from 'mongoose'
import {CarBaseSchema, ICarBase} from './CarBase.model'

export interface IElectricCar extends ICarBase{
    range: number

}
export const ElectricCarSchema = new Schema<IElectricCar>({
    ...CarBaseSchema.obj,
    range: Number
}, { collection: 'ElectricCars' })
export const ElectricCarModel = models?.ElectricCars || model<IElectricCar>('ElectricCars', ElectricCarSchema)
