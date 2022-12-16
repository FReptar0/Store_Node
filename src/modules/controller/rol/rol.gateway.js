const { query } = require('../../../utils/MySQL');

const findAll = async () => {
  const sql = `SELECT * from ROl`;

  return await query(sql, []);
};

const findById = async (id) => {
  if (!id) throw Error("Missing fields");
  if (Number.isNaN(id)) throw Error("Wrong Type");
  const sql = `SELECT * FROM ROL Where ID_ROL=?`;
  return await query(sql, [id]);
};

const save = async (rol) => {
  if (
    !rol.ROL_NAME 

  )
    throw Error("Missing field");
  const sql = `INSERT INTO ROL (ROL_NAME) VALUES (?)`;
  const { insertedId } = await query(sql, [
    rol.ROL_NAME
  ]);
  return { ...rol}
};

const update = async (rol, id) => {
  console.log(rol.ROL_NAME);
  if (Number.isNaN(id)) throw Error("Wrong Type")
  if (
    !rol.ROL_NAME
) throw Error('Missing fields');
  const sql = `UPDATE ROL SET ROL_NAME=? WHERE ID_ROL=?`;
  await query(sql,[
    rol.ROL_NAME,
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
