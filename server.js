/*
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3500;
*/
// express methods
/*
app.get('/', (req, res) => {
    res.send("Hey bro my name is jack!😭😂😂");
})
*/
/*
// also we can sendFiles
app.get('/', (req, res) => {
    // there are two methods to sendFile
    //1. `./` also you need to specify root
    //res.sendFile('./views/index.html', {root: __dirname});
    //2. path.join( )
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
// so now we know how sendFile let's serve some files
app.get('/new-page.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})
//redirect
app.get('/old-page.html', (req, res) => {
    res.redirect('/new-page.html');
})
*/
///////////////////////////////////////
/*we have some issue remember we had an .html extension adder in our node webserver 
 so we need something that will help with this
👉👉👉express accepts regular expressions we can make use of it****
 */ 
// regular expression👇
// when there is no extension we consider it aswell for that regular expresion (.html)? ****
////👉👉👉as you have noticed these app. methods will execute downward like a waterfall👈👈//////
// it's like having some conditionals*** and have a default in this it is 404***
/*
app.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})
app.get('/old-page(.html)?', (req, res) => {
    res.redirect('new-page.html');
})
// regular expression for selecting all 👉👉 /*
// default👇
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})
*/
//////////////////////////////////
// the 404✅ but the statusCode is 200 which means succesful \
// express adds status by default✅
// but here in this default 404 case we need to set it 404✅
/*
app.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); //status 200 by default✅
})
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html')); //status 200 by default✅
})
app.get('old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html'); // here the status is 302 by default and we need change it 👉👉redirect(301, 'new-page.html);S
})
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // so here status is 200 by default we need to change it to 404 by chaining .status(404) 
})
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
*/
/////////////////////////////////////////////////////////////////////////////////////////////////
//again
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style.css'));
})






app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
