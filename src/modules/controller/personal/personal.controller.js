const { Response, Router } = require('express');
const { findAll, findByID, save, update, remove } = require('./personal.gateway');

const getAll = async (req, res = Response) => {
    try {
        const personal = await findAll();
        res.status(200).json(personal);
        res.json(personal);
    } catch (error) {
        console.log(error);
        const message = "Error al obtener los datos"
        res.status(400).json({ message });
    }
}

const getById = async (req, res = Response) => {
    try {
        const { id } = req.params
        const personal = await findByID(id)
        res.status(200).json(personal)
    } catch (error) {
        console.log(eror)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}


const insert = async (req, res = Response) => {
    try {
        const { FULLNAME, EMAIL, PASSWORD, ID_ROL, ID_STORE } = req.body
        const personal = await save ( {FULLNAME, EMAIL, PASSWORD, ID_ROL, ID_STORE})
        res.status(200).json(personal)
    } catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const updateP = async (req, res = Response) => {
    try {
        const { id } = req.params
        const { FULLNAME, EMAIL, PASSWORD } = req.body
        const personal = await update({FULLNAME, EMAIL, PASSWORD}, id)
        res.status(200).json(personal)
    }catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const removeP = async (req, res = Response) => {
    try {
        const { id } = req.params
        const personal = await remove(id)
        res.status(200).json(personal)
    } catch (error) {
        console.log(error)
        const message = "Error al obtener los datos"
        res.status(400).json({ message })
    }
}

const personalRouter = Router();

personalRouter.get('/', getAll);
personalRouter.get('/:id', getById);
personalRouter.post('/', insert);
personalRouter.put('/:id', updateP);
personalRouter.delete('/:id', removeP);

module.exports = {personalRouter};