const Category = require("../models/category");

const createCategory = async (categoryData) => {
  const category = await Category.create(categoryData);

  await category.populate("user");

  return category;
};

const getCategory = async (id) => {
  const category = await Category.findById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  await category.populate("user");

  return category;
};

const getCategories = async (userId) => {
  const categories = await Category.find({ user: userId }).populate("user");

  return categories;
};

const updateCategory = async (id, categoryData) => {
  const category = await Category.findByIdAndUpdate(id, categoryData, {
    returnDocument: "after",
  });

  if (!category) {
    throw new Error("Category not found");
  }

  await category.populate("user");

  return category;
};

const deleteCategory = async (id) => {
  await Category.findByIdAndDelete(id);
};

module.exports = {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
