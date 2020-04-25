const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _ = require('lodash');
const port = 6400;


var json = { count : 10, message : 'hi json'}


app.use(express.static('client'));





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

