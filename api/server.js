const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/', (req, res) =>{
    db('accounts').then(r => res.send(r));
})

server.get('/:id', (req, res) =>{
    db('accounts').where({id: req.params.id}).then(r => res.send(r));
})
server.post('/', (req, res) =>{
    db('accounts').insert(req.body).then(r => res.send(`new record added with id of ${r}`)).catch(e=>res.send(e));
})
module.exports = server;

server.put('/:id', (req, res) =>{
    db('accounts').where({id: req.params.id}).update(req.body).then(r => res.send(`${r} record(s) updated`));
})

server.delete('/:id', (req, res) =>{
    db('accounts').where({id: req.params.id}).del().then(r => res.send(`${r} record(s) deleted`));
})