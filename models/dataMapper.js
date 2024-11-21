import client from './database.js'

const dataMapper = {

    async getProducts(){
        const result = await client.query(`SELECT * FROM product;`);
        return result.rows;    
    },

    async getThreeProducts(){
        const result = await client.query(`SELECT * FROM "product" ORDER BY reference DESC LIMIT 3;`);
        return result.rows;    
    },

    async getOneProduct(id){
        const result = await client.query(`SELECT * FROM "product" JOIN "origine" ON product.origine_id = origine.id JOIN "type" ON product.type_id = type.id WHERE "reference" = $1;`, [id]);
        return result.rows[0]; 
    },

};

export default dataMapper;