require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser');
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(process.env.MONGODB_URI, async (err, client) => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
});