const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const lodash = require('lodash');
const port = 6400;

var json = { count : 10, message : 'hi json'}


app.get('/', (req, res) => {

    res.sendFile(__dirname +'/test.html', (err) =>{
        if (err) {
            res.status(500).send(err)
        }
    })
})


app.get('/data', (req, res) => {
    res.json(json)    
})


app.listen(port, () => {
    console.log(`Server is currently running on http://localhost:${port}`);
    
})

