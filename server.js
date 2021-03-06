const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require('./recipes/recipesRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
  return res.send('<h1>Node-db4-challenge</h1>');
});

module.exports = server;
