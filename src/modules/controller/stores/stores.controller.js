const { Response, Router } = require('express');
// TODO: Crear las funciones para el CRUD de la tabla stores
const { findAll, findOne, save, update, remove } = require('./stores.gateway.js');

const getAll = async (req, res = Response) => {
    try {
        const stores = await findAll();
        res.status(200).json(stores);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to get all' });
    }
}

const getOne = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const store = await findOne(id);
        res.status(200).json(store);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to get one' });
    }
}

const post = async (req, res = Response) => {
    try {
        const { NAME, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE } = req.body;
        const store = await save({ NAME, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE });
        res.status(200).json(store);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to post one' });
    }
}

const put = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const { NAME, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE } = req.body;
        const store = await update({ NAME, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE }, id);
        res.status(200).json(store);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to put one' });
    }
}

const eliminate = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const store = await remove(id);
        res.status(200).json(store);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error to delete one' });
    }
}

const storeRouter = Router();

storeRouter.get('/', getAll);
storeRouter.get('/:id', getOne);
storeRouter.post('/', post);
storeRouter.put('/:id', put);
storeRouter.delete('/:id', eliminate);

module.exports = { storeRouter };