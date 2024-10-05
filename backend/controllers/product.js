const category = require('../models/category');
const Category = require('../models/category');
const Product = require('../models/product');

exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id).populate('category');
    res.json({ products });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { products } = req.body;
    const categories = await Category.find();

    for (const product of products) {
      const newProduct = new Product(product);
      await newProduct.save();
      categories
        .find(
          category => category._id.toString() === newProduct.category.toString()
        )
        .products.push(newProduct);
    }

    categories.forEach(async category => {
      await category.save();
    });

    res.json({ message: 'Product added successfully' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
