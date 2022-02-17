const express = require('express')
const app = express()
const logger = require('./logger-middleware')
const authorize = require('./authorise-middleware')

app.use([logger, authorize]) // apply to all route below
// app.use('/api',logger) // apply to all route after api

app.get('/' , (req, res) => {
    res.send('Home Page')
})
app.get('/about' , (req, res) => {
    res.send('About Page')
})

app.get('/api/products' , (req, res) => {
    res.send('Products')
})
app.get('/api/items' , (req, res) => {
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server running at port 5000');
})