const db = require('./db');
const express = require('express');
const app = express();
const { Product, Category } = require('./models');

const syncAndSeed = () => {
  return db
    .sync({ force: true })
    .then(() => console.log('db synced and seeded'));
};

const PORT = process.env.url || 3000;

syncAndSeed().then(() => {
  console.log(`App is listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
  console.log('something happened');
  res.send('hello world');
});
