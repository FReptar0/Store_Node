const { Response, Router } = require('express');
// TODO: Crear las funciones para el CRUD de la tabla rol
const {findAll,findById,save,update,remove} = require('./rol.gateway');

const getAll = async (req, res = Response) => {
  try {
    const rol = await findAll();
    res.status(200).json(rol); 
  } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).json({ message }); // { message:""}
  }
};

const getById= async(req,res=Response)=>{
  try{
    const {id} = req.params;
    const rol = await findById(id);
    res.status(200).json(rol)
  }catch(error){
    console.log(error)
    const message= validateError(error);
    res.status(400).json({message});
  }
}

const insert =async(req,res=response)=>{
  try{
    
    const {rol_name}=req.body;
    const rol = await save({rol_name});
    res.status(200).json(rol);
  }catch(error){
    console.log(error)
    const message = validateError(error);
    res.status(400).json({message});
  }
}

const actualize =async(req,res=response)=>{
  try{
    const {id}=req.params;
    const{rol_name}= req.body;
    const rol = await update({
        rol_name
    },id);
    res.status(200).json(rol);
  }catch(error){
    console.log(error)
    const message = validateError(error);
    res.status(400).json({message});
  }
}

const eliminate = async(req,res=response)=>{
  try{
    const {id} = req.params;
    const rol = await remove(id);
    res.status(200).json(rol);
  }catch(error){
    console.log(error)
    const message = validateError(error);
    res.status(400).json({message});
  }
}


//constructor para las rutas 
const rolRouter = Router();

rolRouter.get('/', getAll);
rolRouter.get('/:id',getById);
rolRouter.post('/',insert);
rolRouter.put('/:id',actualize);
rolRouter.delete('/:id',eliminate);

module.exports = {
    rolRouter
}