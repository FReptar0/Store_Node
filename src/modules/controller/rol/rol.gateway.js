const { query } = require('express')
const { sql } = require('../../../utils/MySQL');

const findAll = async () => {
  const query = `SELECT * from ROl`;

  return await sql(query, []);
};

const findById = async (id) => {
  if (!id) throw Error("Missing fields");
  if (Number.isNaN(id)) throw Error("Wrong Type");
  const query = `SELECT * FROM ROL Where ID_ROL=?`;
  return await sql(query, [id]);
};

const save = async (rol) => {
  if (
    !rol.rolname 

  )
    throw Error("Missing field");
  const query = `INSERT INTO ROL (ROLNAME) VALUES (?)`;
  const { insertedId } = await sql(query, [
    rol.rolname
  ]);
  return { ...rol}
};

const update = async (rol, id) => {
  if (!id) throw Error('Missing fields');
  if (Number.isNaN(id)) throw Error("Wrong Type")
  if (
    !rol.rolname
) throw Error('Missing fields');
  const query = `UPDATE ROL SET ROLNAME=? WHERE ID_ROL=?`;
  await sql(query,[
    rol.rolname,
    id
  ]);
  return {...rol,id:id}
}

const remove = async(id)=>{
  if(!id) throw Error('Missing fields');
  if(Number.isNaN(id)) throw Error("Wrong Type");
  const query = 'DELETE FROM ROL WHERE ID_ROL=?';
  await sql(query,[id]);
  return {idDeleted:id} 
}

module.exports = {
  findAll,
  findById,
  save,
  update,
  remove
};
