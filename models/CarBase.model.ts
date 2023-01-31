import {Schema, model, models, Types} from 'mongoose'
import {IBase} from "../DB"

export interface ICarBase extends IBase{
    brand: string,
    model: string,
    images: Array<string>,
    description: string,
    zeroToHundred: number,
    weight: number,
    color: string,
    capacity: number,
    price: number,
    year: number,
    bodyType: string,
    transmission: string,
    drive: string,
}

export const CarBaseSchema = new Schema<ICarBase>({
    _id: Types.ObjectId,
    brand: {type: String, required: true},
    model: {type: String, required: true},
    images: {type: [String], required: true},
    color: {type: String, required: true},
    capacity: {type: Number, required: true},
    price: {type: Number, required: true},
    year: {type: Number, required: true},
    bodyType: {type: String, required: true},
    transmission: {type: String, required: true},
    drive: {type: String, required: true},

    description: String,
    zeroToHundred: Number,
    weight: Number
})
