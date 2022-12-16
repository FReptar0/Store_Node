const { Response, Router } = require('express');
// TODO: Crear las funciones para el CRUD de la tabla providers
const { findAll, findById, save, update, remove } = require("./providers.gateway");

const getAll = async (req, res = Response) => {
  try {
    const providers = await findAll();
    res.status(200).json(providers);
  } catch (error) {
    console.log(error);
    res.status(400).json({error:'error'}); // { message:""}
  }
};

const getById = async (req, res = Response) => {
  try {
    const { id } = req.params;
    const provider = await findById(id);
    res.status(200).json(provider)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error:'error' });
  }
}

const insert = async (req, res = Response) => {
  try {
      const { FULLNAME, EMAIL, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY,PHONE } = req.body;
      const provider = await save({ FULLNAME, EMAIL, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY,PHONE });
      res.status(200).json(provider);
  } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Error to post one' });
  }
}

const actualize = async (req, res = Response) => {
  try {
    const { id } = req.params;
    const { FULLNAME, EMAIL, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE  } = req.body;
    const provider = await update({
      FULLNAME, EMAIL, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE 
    }, id);
    res.status(200).json(provider);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error:'error' });
  }
}

const eliminate = async (req, res = Response) => {
  try {
    const { id } = req.params;
    const provider = await remove(id);
    res.status(200).json(provider);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error:'error' });
  }
}


//constructor para las rutas 
const providersRouter = Router();

providersRouter.get('/', getAll);
providersRouter.get('/:id',getById);
providersRouter.post('/',insert);
providersRouter.put('/:id',actualize);
providersRouter.delete('/:id',eliminate);

module.exports = {
  providersRouter
}


