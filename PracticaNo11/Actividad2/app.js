const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.listen('3000',() => {
    console.log("Servidor e ejecucion");
})

const bookRouter = require('./books');
app.use('/api',bookRouter);