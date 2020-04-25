const express = require('express');
const app = express();

const port = 6400;

var json = { count : 10, message : 'hi json'}



app.get('/data', (req, res) => {
    res.json(json)    
})


app.listen(port, () => {
    console.log(`Server is currently running on http://localhost:${port}`);
    
})

