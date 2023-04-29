const express = require('express');
const app = express();

const web = require('./routes/web.js');

const port=process.env.PORT || 3000;


app.use(web);

app.listen(port, ()=>{
    console.log('Listening on port', port)});
