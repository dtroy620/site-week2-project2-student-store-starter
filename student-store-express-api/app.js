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

app.get('/', (req, res) => {
    res.status(200)
    res.send(db)
})

app.post('/', (req,res) => {
    console.log('POST HIT')
    console.log(req.body);
    res.send('succes')
})

module.exports = app;