const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const { json } = require("express/lib/response.js");
const db = require('../db/index.js');

const port = process.env.PORT || 3005;

/*
Express Middleware
 
    React -> Request -> Node/Express  
                      middleware v
      ^ Response  <-  Route-Handler
                        
*/

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
app.use(express.json()); // serve files from public statically
//app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public')); // Keep
app.use(cors({ origin: '*' }));
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
        const results = db.query("DELETE FROM items where id = $1", [
            req.params.id
        ]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
})

// update
app.put("/api/v1/invItem/:id", async (req, res) => {
    try {

    } catch (error) {

    }
})

// create 
app.post("/api/v1/invItem/id:", (req, res) => {
    const callAdd = json(req.body);
    res.json({ callAdd });
})

// read
app.get('/', (req, res) => {
    res.send("hola");
})

app.get("/api/v1/invItem", async (req, res) => {
    try {
        const results = await db.query("select * from storeData");
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
app.get("/api/v1/invItem/:id", async (req, res) => {
    console.log(req.params);
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