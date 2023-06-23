// YOUR CODE HERE
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const db = require('./data/db.json')
const cors = require('cors')

class User {
    constructor({name, id}){
        this.name = name;
        this.id = id;
    }
}

class UserUtils {
    static getAllUsers() {}
    static deleteAllUsers() {}
}

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200)
    res.send(db)
})

app.post('/', (req,res) => {
    console.log('POST HIT')
    console.log(req.body);
    res.send('succes')
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params
    let product = db.products.filter(product => product.id === parseInt(id))
    product ? product = product[0] : res.send("No products found")
    res.send({"product": product})
})
module.exports = app;