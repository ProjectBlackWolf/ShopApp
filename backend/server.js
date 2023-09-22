import express from "express";
import cors from 'cors';
import methodOverride from 'method-override';
import db from './db/index.js';
import dotenv from 'dotenv';
import { getDirName } from "./getDirName.js";
const port = process.env.PORT || 3005;
const app = express();
const dirName = getDirName(import.meta.url);
/*
Express Middleware

    React -> Request -> Node/Express  
                        middleware v
    ^  Response    <-  Route-Handler
                        
*/
dotenv.config();
//induces order 
//use
//set 
//engine
//delete d
//put u
//post c
//get r
//listen
//

// creates a new middle ware function to override
// the req method property with a new value
app.use(methodOverride("_method"));

//app.use('/public', express.static('public'));
app.use(express.static(dirName + '/public')); // Keep
app.use(cors());
app.use(express.json()); // serve files from public statically
//parsing incomming requests
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});
// Delete an item
app.delete("/invItem/:id", async (req, res) => {
    try {
        const results = db.query("DELETE FROM product where id = $1", [
            req.params.id
        ]);
        res.status(204).json({
            status: "success",
        });
        console.log(results);
    } catch (err) {
        console.log(err);
    }
})

// update
// 'add to cart'??????
// yes just because of this assignment
app.put("/invItem/update/:id", async (req, res) => {
    try {
        const results = await db.query("ALTER TABLE usercart where id = $1",
            [id]);
        res.json(results)

    } catch (error) {
        console.log(error);
    }
})

// create 
app.post("/invItem", async (req, res) => {
    await db.query("INSERT INTO product id = $1", [
        req.body
    ]);
})

// read
app.get('/', (req, res) => {
    res.send("hola");
})
//https://fakestoreapi.com/users

// GET ALL\ items
app.get("/invItem/getAll", async (req, res) => {
    try {
        const itemas = await db.query('SELECT * FROM product');
        console.log(itemas);
        res.json(itemas.rows);
    } catch (error) { console.log(error); }
});

// Get one specific item
// show
app.get("/invItem/:id", async (req, res) => {
    try {
            const {id} = req.params;
        const results =
        await db.query(`SELECT * FROM product WHERE id = $1`, [id]);
        console.log(res.status({ results }));
        res.send(results);
    } catch (error) {
        console.log(error);
    }
    
})

app.listen(port, () => {
    console.log
        (`server is up and listening on port ${port}`);
});