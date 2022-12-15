const { query } = require('../../../utils/MySQL');

const findAll = async () => {
  const sql = `SELECT * from PROVIDERS`;
  return await query(sql, []);
};

const findById = async (id) => {
  if (!id) throw Error("Missing fields");
  if (Number.isNaN(id)) throw Error("Wrong Type");
  const sql = `SELECT * FROM PROVIDERS Where ID_PROVIDER=?;`;
  return await query(sql, [id]);
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
  const sql = `INSERT INTO PROVIDERS (FULLNAME,EMAIL,ADDRESS,CITY,STATE,ZIPCODE,COUNTRY,PHONE) VALUES (?,?,?,?,?,?,?,?);`;
  const { insertedId } = await query(sql, [
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
  const sql = `UPDATE PROVIDERS SET FULLNAME=?, EMAIL=?,ADDRESS=?, CITY=?, STATE=?, ZIPCODE=?, COUNTRY=?,PHONE=? WHERE ID_PROVIDER=?;`;
  await query(sql,[
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
  const sql = 'DELETE FROM PROVIDERS WHERE ID_PROVIDER=?';
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
