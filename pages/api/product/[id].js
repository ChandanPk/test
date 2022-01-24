import Product from '../../../models/Product'
import dbConnect from '../../../utils/mongo'

// import mongoose from 'mongoose';
export default async function handler(req, res){
    const { method, query: { id } } = req

    await dbConnect();

    if (method === 'POST') {
        console.log("Post request was made")
    }

    if (method === 'GET') {
        try {
            const data = await Product.findById(id)
            res.status(200).json(data)
        } catch (err) {
            console.log(err.message)
            // res.status(500).json(err)
        }
    }

}