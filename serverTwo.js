//again
/*
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 5555;

app.get('^/$|index(.html)?', (req, res) => {
        console.log(req.url, req.method);
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style.css'));
})

app.get('/new-page(.html)?', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

app.get('/old-page(.html)?', (req, res) => {
    console.log(req.url, req.method);
    res.redirect('new-page.html');
})

app.get('/*', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})
///lemme try to serve css file
app.get('/css/style.css', (req, res) => {
    res.sendFile('../../css/style.css');
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
*/