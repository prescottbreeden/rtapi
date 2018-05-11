// dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const hbs = require('hbs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

require('./routes/routes')(app);

app.listen(8000, function(){
    console.log('Power Overwhelming....')
})