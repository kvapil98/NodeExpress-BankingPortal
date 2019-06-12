const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

//configure directory to where our views can be found
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//All of our CSS/JS for the client-side is found in the public directory. We need to point express to public
app.use(express.static(path.join(__dirname, 'public'))); 

//read json file and convert to a javascript object
const accountData = fs.readFileSync(
    path.join(__dirname, 'json', 'accounts.json'),'utf8'
);
const accounts = JSON.parse(accountData);

//read json file and convert to a javascript object
const userData = fs.readFileSync(
    path.join(__dirname, 'json', 'users.json'), 'utf8'
);
const users = JSON.parse(userData);

//index route, acounts route
app.get('/', (req,res) => res.render('index', {title:'Account Summary', accounts}));

app.get('/savings', (req,res) => {
    res.render('account', {account: accounts.savings});
});
app.get('/checking', (req,res) => {
    res.render('account', {account: accounts.checking});
});
app.get('/credit', (req,res) => {
    res.render('account', {account: accounts.credit});
});

app.get('/profile', (req,res) => {
    res.render('profile', {user: users[0]});
});

app.listen(3000, () => console.log("PS Project Running on port 3000!"));