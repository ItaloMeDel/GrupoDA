const express = require('express');
const appRouter = express.Router();

const con = require("./connection");

const bodyParser = require("body-parser");
appRouter.use(bodyParser.urlencoded({extended:true}));
appRouter.use(bodyParser.json());

let sql_all = 'CALL usp_listar_books()';

appRouter.get('/books',(req,res) => {
    con.query(sql_all,(error,results) => {
        if(error) {
            throw error;
        }
        res.send(results);
    })
});

module.exports = appRouter