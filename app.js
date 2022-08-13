const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import Routes

const postsRouter = require ('./routes/posts');
app.use('/posts', postsRouter);

// Routes

app.get('/',(req,res) => {
    res.send('We are on Home');
});


app.get('/posts',(req,res) => {
    res.send('We are on Posts');
});

// lien mongodb atlas : https://cloud.mongodb.com/v2/608712ec1cd4da135c32fe73#clusters => n'oubliez pas de connecter dans atlas avec la bd qui c'appel CRUD

mongoose.connect(process.env.DB_CONNECTION,() => console.log('connected to DB !!'));



//Server

const PORT = 3000;

app.listen(PORT,() =>{ console.log(`Server is running succesfully on PORT :${PORT}`)});