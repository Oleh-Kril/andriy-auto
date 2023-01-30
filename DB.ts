import mongoose, {Types} from 'mongoose'
export interface IBase {
    _id: string | Types.ObjectId
}
const connectMongo = async () => mongoose.connect(String(process.env.MONGO_URI))

export default connectMongo
