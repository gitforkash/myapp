const express = require('express');
const app = express();

const server = app.listen(7070,() =>{
    console.log('Express running on port - 7070');
});

app.get('/',(req,res) => {
    res.send('Reading and writing from Kashyaps site');
})