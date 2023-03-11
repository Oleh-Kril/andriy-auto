import mongoose, {Types} from 'mongoose'
export interface IBase {
    _id: string | Types.ObjectId
}

export function IdToStr(array: Array<IBase> ){
    return array.map((doc: any) => {
        const item = doc.toObject()
        item._id = item._id.toString()
        return item
    })
}
const connectMongo = async () => mongoose.connect(String(process.env.MONGO_URI))

export default connectMongo
