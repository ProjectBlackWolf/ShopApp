import pkg from 'pg';
const { Pool, Client } = pkg;

import dotenv from 'dotenv';
dotenv.config();
console.log(process.env);
const pool = new Pool({
                user: process.env.PGUSER,
                host: process.env.PGHOST,
                password: process.env.PGPASSWORD,
                database: process.env.PGDATABASE,
                port: process.env.PGPORT,
        })
console.log(pool);
pool.connect();
console.log('did we connex');
export default pool