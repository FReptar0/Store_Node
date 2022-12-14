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
    
    const {rolname}=req.body;
    const rol = await save({rolname});
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
    const{rolname}= req.body;
    const rol = await update({
        rolname
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

rolRouters.get('/', getAll);
rolRouters.get('/:id',getById);
rolRouters.post('/',insert);
rolRouters.put('/:id',actualize);
rolRouters.delete('/:id',eliminate);

module.exports = {
    rolRouter
}