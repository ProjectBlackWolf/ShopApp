import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config();
const pool = new Pool({
                user: process.env.USER,
                host: process.env.HOST,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                port: process.env.PORT,
                connectionString: process.env.CONNECTION_STRING
        })
pool.connect();
console.log('did we connex');
export default pool