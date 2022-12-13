const { query } = require('express');
const { sql } = require('../../../utils/MySQL');

const findAll = async () => {
  const query = `SELECT * from PROVIDERS`;

  return await sql(query, []);
};

const findById = async (id) => {
  if (!id) throw Error("Missing fields");
  if (Number.isNaN(id)) throw Error("Wrong Type");
  const query = `SELECT * FROM PROVIDERS Where ID_PROVIDER=?`;
  return await sql(query, [id]);
};

const save = async (provider) => {
  if (
    !provider.fullname ||
    !provider.email ||
    !provider.address ||
    !provider.city ||
    !provider.state ||
    !provider.zipcode ||
    !provider.country ||
    !provider.phone
  )
    throw Error("Missing field");
  const query = `INSERT INTO PROVIDERS (FULLNAME,EMAIL,ADDRESS,CITY,STATE,ZIPCODE,COUNTRY,PHONE) VALUES (?,?,?,?,?,?,?,?)`;
  const { insertedId } = await sql(query, [
    provider.fullname,
    provider.email,
    provider.address,
    provider.city,
    provider.state,
    provider.zipcode,
    provider.country,
    provider.phone

  ]);
  return { ...provider}
};

const update = async (provider, id) => {
  if (!id) throw Error('Missing fields');
  if (Number.isNaN(id)) throw Error("Wrong Type")
  if (
    !provider.fullname ||
    !provider.email ||
    !provider.address || 
    !provider.city ||
    !provider.state || 
    !provider.zipcode ||
    !provider.country ||
    !provider.phone
) throw Error('Missing fields');
  const query = `UPDATE PROVIDERS SET FULLNAME=?, EMAIL=?,ADDRESS=?, CITY=?, STATE=?, ZIPCODE=?, COUNTRY=?,PHONE=? WHERE ID_PROVIDER=?`;
  await sql(query,[
    provider.fullname,
    provider.email,
    provider.address,
    provider.city,
    provider.state,
    provider.zipcode,
    provider.country,
    provider.phone,
    id
  ]);
  return {...provider,id:id}
}

const remove = async(id)=>{
  if(!id) throw Error('Missing fields');
  if(Number.isNaN(id)) throw Error("Wrong Type");
  const query = 'DELETE FROM PROVIDERS WHERE ID_PROVIDER=?';
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
