//const {response} = require('express');

const userGet = (req, res) => {
  const {q, name, apikey, page = 1, limit = 10} = req.query
  res.json({message: 'Hello World! - GET - Controller', q, name, apikey, page, limit});
}

const userPut = (req, res) => {
  const {id} = req.params;
  res.json({message: 'Hello World! - PUT - Controller', id});
}

const userPost = (req, res) => {
  const {name, age} = req.body;
  res.json({message: 'Hello World! - POST - Controller', name, age});
}

const userDelete = (req, res) => {
  res.json({message: 'Hello World! - DELETE - Controller'});
}

const userPatch = (req, res) => {
  res.json({message: 'Hello World! - PATCH - Controller'});
}

module.exports = {
  userGet,
  userPut,
  userPost,
  userDelete,
  userPatch
}
