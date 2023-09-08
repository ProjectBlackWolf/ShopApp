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
      ^ Response  <-  Route-Handler
                        
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
app.use(cors({ origin: '*' }));
app.use(express.json()); // serve files from public statically
//parsing incomming requests
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("Yeah our Middleware.");
    next();
});

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});

app.use((req, res, next) => {
    console.log("This is our second middleware.");
    next();
});

// Delete an item
app.delete("/api/v1/invItem/:id", async (req, res) => {
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
app.put("/api/v1/invItem/:id", async (req, res) => {
    try {
        
        const results = await db.query("ALTER TABLE product where id = $1", [
            req.params.id
        ]);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                invItem: results[rows]
            }
        })
        res.send(results);
        
    } catch (error) {
        console.log(error);
    }
})

// create 
app.post("/api/v1/invItem", async (req, res) => {
    await db.query("INSERT INTO product id = $1", [
        req.body
    ]);
})

// read
app.get('/', (req, res) => {
    res.send("hola");
})


// GET ALL
app.get("/api/v1/invItem", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM storedata");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                invItem: results[rows],
            },
        });
    } catch (error) { console.log(error); }
});

// Get one specific item
// Buy form after buy button is pressed. 
// This leads to 'add to cart' [UPDATE]
app.get("/api/v1/invItem/:id", async (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            invItem: results.rows[0]
        }
    })
})


app.get("/api/v1/storeApp", (req, res) => {
    res.send("hola");
})

app.listen(port, () => {
    console.log
        (`server is up and listening on port ${port}`);
});