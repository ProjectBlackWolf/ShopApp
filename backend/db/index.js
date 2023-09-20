import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';
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