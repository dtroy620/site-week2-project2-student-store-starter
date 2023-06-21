// YOUR CODE HERE
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const db = require('./data/db.json')
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.status(200)
    res.send(db)
})

module.exports = app;