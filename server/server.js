const express = require('express');
const app = express();

const port = 8000;

var json = { count : 10, message : 'hi json'}

app.get('/', (req, res) => {

})
app.listen(port, () => {
    console.log(`Server is currently running on https://localhost:${port}`);
    
})