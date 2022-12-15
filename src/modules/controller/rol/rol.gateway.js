const { query } = require('../../../utils/MySQL');

const findAll = async () => {
  const query = `SELECT * from rol`;
  return await sql(query, []);
};

const findById = async (id) => {
  if (Number.isNaN(id)) throw Error("Wrong Type");
  const sql = `SELECT * FROM ROL Where ID_ROL=?`;
  return await query(sql, [id]);
};

const save = async (rol) => {
  if (
    !rol.rol_name 

  )
    throw Error("Missing field");
  const sql = `INSERT INTO ROL (ROL_NAME) VALUES (?)`;
  const { insertedId } = await query(sql, [
    rol.rol_name
  ]);
  return { ...rol, id:insertedId}
};

const update = async (rol, id) => {
  console.log(rol.rol_name);
  if (Number.isNaN(id)) throw Error("Wrong Type")
  if (
    !rol.rol_name
) throw Error('Missing fields');
  const sql = `UPDATE ROL SET ROL_NAME=? WHERE ID_ROL=?`;
  await query(sql,[
    rol.rol_name,
    id
  ]);
  return {...rol,id:id}
}

const remove = async(id)=>{
  if(Number.isNaN(id)) throw Error("Wrong Type");
  const sql = 'DELETE FROM ROL WHERE ID_ROL=?';
  await query(sql,[id]);
  return {idDeleted:id} 
}

module.exports = {
  findAll,
  findById,
  save,
  update,
  remove
};
