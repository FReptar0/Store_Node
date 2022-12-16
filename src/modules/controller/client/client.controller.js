const { Response, Router } = require ('express')
const { validateError } = require ('../../../utils/functions')
const { findAll, findByID, save, update, remove} = require ('./client.gateway')

const getAll = async (req, res = Response) => {
    try {
        const client = await findAll()
        res.status(200).json(client)
    } catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const getById = async (req, res = Response) => {
    try {
        const { id } = req.params
        const client = await findByID(id)
        res.status(200).json(client)
    } catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const insert = async (req, res = Response) => {
    try {
        const { FULLNAME, EMAIL, PASSWORD, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE} = req.body
        const client = await save ({FULLNAME, EMAIL, PASSWORD, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE})
        res.status(200).json(client)
    } catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const updateC = async (req, res = Response) => {
    try {
        const { id } = req.params
        const { FULLNAME, EMAIL, PASSWORD, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE} = req.body
        const client = await update ({FULLNAME, EMAIL, PASSWORD, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE}, id)
        res.status(200).json(client)
    } catch (error) {
        console.log(error);
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const removeC = async (req, res = Response) => {
    try {
        const { id } = req.params
        const client = await remove(id)
        res.status(200).json(client)
    } catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const clientRouter = Router()

clientRouter.get('/', getAll)
clientRouter.get('/:id', getById)
clientRouter.post('/', insert)
clientRouter.put('/:id', updateC)
clientRouter.delete('/:id', removeC)

module.exports = {
    clientRouter
}