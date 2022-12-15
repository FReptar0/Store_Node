const { Response, Router, application } = require('express');
// TODO: Crear las funciones para el CRUD de la tabla orders
const { findAll, findOne, save, update, remove } = require('./orders.gateway');

const getAll = async(req, res=Response) => {
    try{
        const orders = await findAll();
        res.status(200).json({orders});
    }catch(error){
        console.log(error);
        res.status(400).json({error:'Error to get all'});
    }
}

const getOne = async(req, res=Response) => {
    try{
        const { id } = req.params;
        const order = await findOne(id);
        res.status(200).json(order);
    }catch(error){
        console.log(error);
        res.status(400).json({error:'Error to get one'});
    }
}

const post = async(req, res=Response) => {
    try{
        const { id_client, id_personal, id_store, description } = req.body;
        const order = await save({id_client, id_personal, id_store, description});
        res.status(200).json(order);
    }catch(error){
        console.log(error);
        res.status(400).json({error:'Error to post one'});
    }
}

const put = async(req, res=Response) => {
    try{
        const { id } = req.params;
        const { id_client, id_personal, id_store, description } = req.body;
        const order = await update({id_client, id_personal, id_store, description}, id);
        res.status(200).json(order);
    }catch(error){
        console.log(error);
        res.status(400).json({error:'Error to put one'});
    }
}

const eliminate = async(req, res=Response) => {
    try{
        const { id } = req.params;
        const order = await remove(id);
        res.status(200).json(order);
    }catch(error){
        console.log(error);
        res.status(400).json({error:'Error to put one'});
    }
}

const orderRouter = Router();

orderRouter.get('/', getAll);
orderRouter.get('/:id', getOne);
orderRouter.post('/', post);
orderRouter.put('/:id', put);
orderRouter.delete('/:id', eliminate);

module.exports = {
    orderRouter
};