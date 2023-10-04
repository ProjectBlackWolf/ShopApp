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
app.put("/invItem/:id", async (req, res) => {
    try {
        const results = await db.query(
            "UPDATE product SET name = $1, price = $2, description = $3, image = $4, quantity = $5, category_id = $6, sku = $7 where id = $8 returning *",
            [req.body.name, req.body.price, req.body.description, req.params.image, req.params.quantity, req.params.category_id, req.params.sku, req.params.id]
        );
        res.status(200).json({
            status: "success",
            data: {
                item: results.rows[0]
            }
        });
    } catch (err) {
        console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
});

// create 
app.post("/invItem", async (req, res) => {
    try {
        const results = await db.query(`INSERT INTO product(id, name, price, description, image, quantity, category_id, sku) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *`,
            [
                req.body.id, req.body.name, req.body.price, req.body.description, req.body.image,
                req.body.quantity, req.body.category_id, req.body.sku
            ]
        );
        console.log(results);
        res.status(201).json({
            status: "succes",
            data: {
                item: results.rows[0],
            },
        });
    } catch (error) {
        console.log(error);
    }
})

app.post('/login', showCookies, async (req, res) => {
    const { id, ps } = req.body;
    const login_res = await axios({
        method: 'POST',
        url: `${URL}/auth`,
        data: {
            id,
            ps
        }
    })
    req.jwt = login_res.data.jwt;
    req.session.jwt = login_res.data.jwt;
    console.log("POST/login");
    res.send(login_res.data);
});

// welcome
app.get('/', (req, res) => {
    res.send("hola");
})

app.get('/secret', requiresAuth, async (req, res) => {
    const token = req.session.jwt;
    const secret_res = await axios({
        method: "GET",
        url: `${URL}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.send(secret_res.data);
});

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
app.get("/invItem/show/:id", async (req, res) => {
    console.log(req.body);
    try {
        const results =
            await db.query(`SELECT * FROM product WHERE id = $1`,
                [req.params.id]);
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                item: results.rows[0]
            }
        });
    } catch (error) {
        console.log(error);
    }
});



app.listen(port, () => {
    console.log
        (`server is up and listening on port ${port}`);
});