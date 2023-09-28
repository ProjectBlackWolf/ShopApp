import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config();
const pool = new Pool({
                user: process.env.PGUSER,
                host: process.env.PGHOST,
                password: process.env.PGPASSWORD,
                database: process.env.PGDATABASE,
                port: process.env.PGPORT,
        })
pool.connect();
console.log('did we connex');
export default pool