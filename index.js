// Require needed modules

const express = require('express')

// Initialize the app objext.
const app = express()

app.get('/', function (req, res) {
    //This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello world')
})

// Listen for connections
app.listen(3000, function () {
    console.log('Starting up Foxnet') 
})

// function () {console.log('Starting up Foxnet)} is
// for knowing you've started up your comp as server