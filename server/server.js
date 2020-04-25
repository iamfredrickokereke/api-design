const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _ = require('lodash');
require('colors');
const colors = require('colors/safe');
const port = 6400;


var json = { count : 10, message : 'hi json'}


app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


var names = [];
var id = 0;

// creating the routes for the crud operation

app.get('/', (req, res) => {

    res.sendFile(__dirname +'/test.html', (err) =>{
        if (err) {
            res.status(500).send(err)
        }
    })
})


app.get('/names', (req, res) => {
    res.json(names || json);
    // colors.red(console.log(json))
    console.log(`${json}`)
    
})


app.listen(port, () => {
    console.log(`Server is currently running on http://localhost:${port}`.bgRed);
    
})

