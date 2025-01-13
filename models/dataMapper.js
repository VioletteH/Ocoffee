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

    async getOrigins(){
        const result = await client.query(`SELECT * FROM "origine"`);
        return result.rows; 
    },

    async getTypes(){
        const result = await client.query(`SELECT * FROM "type"`);
        return result.rows; 
    },

    async getProductByReference(reference) {
        const result = await client.query(`SELECT * FROM "product" WHERE "reference" = $1`, [reference]);
        return result.rows[0]; 
    },

    async addProduct({ reference, name, description, origin, price, type, availability }) {
        
        const originResult = await client.query(`SELECT id FROM "origine" WHERE country = $1;`, [origin]);
        const originId = originResult.rows[0].id;
    
        const typeResult = await client.query(`SELECT id FROM "type" WHERE strenght = $1;`, [type]);
        const typeId = typeResult.rows[0].id;
    
        const result = await client.query(
            `INSERT INTO "product" ("reference", "name", "description", "origine_id", "price", "type_id", "availability") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`, [reference, name, description, originId, price, typeId, availability]
        );
        return result.rows[0];  
    },

    async deleteProduct(reference) {
    
        const result = await client.query(
            `DELETE FROM "product" WHERE reference = $1`, [reference]
        );
        return result.rows[0];  
    }

};

export default dataMapper;