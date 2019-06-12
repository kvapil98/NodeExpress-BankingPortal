const fs = require('fs');
const path = require('path');
const express = require('express');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

const app = express();

const { accounts, users, writeJSON } = require('./data');

//configure directory to where our views can be found
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//All of our CSS/JS for the client-side is found in the public directory. We need to point express to public
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({extended: true}));

//index route, acounts route
app.get('/', (req,res) => res.render('index', {title:'Account Summary', accounts}));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', (req,res) => {
    res.render('profile', {user: users[0]});
});

app.listen(3000, () => console.log("PS Project Running on port 3000!"));