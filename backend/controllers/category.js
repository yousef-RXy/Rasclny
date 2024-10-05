const Category = require('../models/category');

exports.addCategories = async (req, res, next) => {
  try {
    const { categories } = req.body;
    for (const category of categories) {
      const newCategory = new Category(category);
      await newCategory.save();
    }
    res.json({ message: 'Categories added successfully' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json({ categories });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate('products');

    res.json({ category });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
