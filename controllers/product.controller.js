import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body 

        await prisma.product.create({
            data : {
                name: body.name,
                category: body.category,
                price: body.price
            }
        })

        res.json ({
            message: 'product created succcesfully'
        })

    }