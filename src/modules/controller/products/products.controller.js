const { Response, Router } = require('express');
// TODO: Crear las funciones para el CRUD de la tabla products
const { findAll, findOne, save, update, remove } = require('./products.gateway');

const getAll = async (req, res = Response) => {
    try {
        const products = await findAll();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to get all' });
    }
}

const getOne = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const product = await findOne(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to get one' });
    }
}

const post = async (req, res = Response) => {
    try {
        const { NAME, DESCRIPTION, PRICE, STOCK, ID_STORE } = req.body;
        const product = await save({ NAME, DESCRIPTION, PRICE, STOCK, ID_STORE });
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to post one' });
    }
}

const put = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const { NAME, DESCRIPTION, PRICE, STOCK } = req.body;
        const product = await update({ NAME, DESCRIPTION, PRICE, STOCK }, id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to put one' });
    }
}

const eliminate = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const product = await remove(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to put one' });
    }
}

const productRouter = Router();

productRouter.get('/', getAll);
productRouter.get('/:id', getOne);
productRouter.post('/', post);
productRouter.put('/:id', put);
productRouter.delete('/:id', eliminate);

module.exports = { productRouter };