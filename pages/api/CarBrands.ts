// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {NextApiRequest, NextApiResponse} from 'next'
import connectMongo, {IBase} from '../../DB'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IBase[]> | any
) {
    await connectMongo()

    // await CarBaseModel.find({}, (err: Error, data: ICarBase[]) => {
    //     if (err) {
    //         res.status(500).json({message: `Error: ${err}`})
    //     } else {
    //         res.status(200).json(data)
    //     }
    // }).clone().catch(function(err: any){ console.log(err)})
}
