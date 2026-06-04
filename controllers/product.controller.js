import { title } from "process";
import { prisma } from "../lib/prisma.js"
import { existsSync, unlinkSync } from "fs"

const removeFilesFromStatic = async (filename) => {
    existsSync(`./uploads/${filename}`) && unlinkSync(`./uploads/${filename}`);
}

export const createProduct = async (req, res) => {
   const filename = req.file.filename
   const body = req.body

        await prisma.product.create({
            data : {
                Image: filename,
                name: body.name,
                category: body.category,
                price: body.price
            }
        })

        res.json ({
            message: 'product created succcesfully'
        })

    }

export const updateProduct = async (req, res) => {
    const body = req.body

    const oldImage = await prisma.product.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select:{
            Image: true
        }
    })

    let data = {
        name: body.name,
        category: body.category,
        price: body.price
    }

    if (req.file) {
        data = {
            ...data,
            Image: req.file.filename
        }
    }

    const updateData = await prisma.product.update({
        where: {
            id: Number(req.params.id)
        },
        data
    })

    if (req.file && updateData) {
        await removeFilesFromStatic(oldImage.Image)
    }

    res.json({
        message: 'Product was updated successfully'
    })
}
export const GetAllproduct = async (req, res) => {
    const data = await prisma.product.findMany ({
        include:  {
        payment: true
    }
    })
    res.json(data)
}

