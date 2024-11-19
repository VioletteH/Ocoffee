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
        const result = await client.query(`SELECT * FROM "product" WHERE "id" = $1;`, [id]);
        return result.rows[0]; 
    },

};

export default dataMapper;