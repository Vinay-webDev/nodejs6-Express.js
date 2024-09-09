const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3500;

// express methods
app.get('/', (req, res) => {
    console.log("Hello Bro!");
    res.send("Hello Bro!");
})









app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})














