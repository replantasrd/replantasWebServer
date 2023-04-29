const express = require('express');
const path = require('path');
const app = express();

const web = require('./routes/web.js');

const port=process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));



app.use(web);

app.listen(port, ()=>{
    console.log('Listening on port', port)});
