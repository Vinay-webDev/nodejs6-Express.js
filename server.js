const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3500;
// express methods
/*
app.get('/', (req, res) => {
    res.send("Hey bro my name is jack!😭😂😂");
})
*/
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

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})














