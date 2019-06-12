const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

//configure directory to where our views can be found
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//All of our CSS/JS for the client-side is found in the public directory. We need to point express to public
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req,res) => res.render('index', {title:'Index'}));

app.listen(3000, () => console.log("PS Project Running on port 3000!"));