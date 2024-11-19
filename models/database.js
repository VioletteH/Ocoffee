import pg from 'pg';
const { Client } = pg;
 
const connectionString = process.env.PGSTRING;
const client = new Client({connectionString});

await client.connect();

export default client;