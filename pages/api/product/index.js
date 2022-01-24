import dbConnect from '../../../utils/mongo';
import Product from '../../../models/Product'

export default async function handler(req, res){
    const { method } = req;

    await dbConnect();

    if(method === 'POST'){
        const data = req.body;
        // console.log(data)
        try {
            const result = await Product.create(data)
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json(err.message)
        }
        console.log("Post request was made")
    }

    if(method === 'GET') {

        try {
            const pizzas = await Product.find()
            res.status(200).json(pizzas)    
        } catch (err) {
            res.status(402).json(err.message)
        }

        // console.log('Get request was made')

    }
}