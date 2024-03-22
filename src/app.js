const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/api/get-env', (req, res) => {

if (process.env.NUMBER) {

res.status(200).json({

number: process.env.NUMBER

});

} else {

res.status(404).json({

err: "Not Found"

});

}

});

module.exports = app;
