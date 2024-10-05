const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

const app = express();
const MONGO_URI = 'mongodb://localhost:27017/DEPI';

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);

app.use((error, req, res, next) => {
  const { message, statusCode, data } = error;
  console.log(error, message, statusCode);
  res.status(statusCode ?? 500).json({ message, data });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    const server = app.listen(8080, () => console.log('app start at 8080'));
  })
  .catch(err => console.log(err));
