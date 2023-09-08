import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
        user: "postgres",
        host: "localhost",
        database: "storedata",
        password: "Sppsql.com",
        port: 5432
});

function query(text, params) { return client.query(text, params); }

export default {query}