// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// CREATES RELATIONSHIPS BETWEEN TABLES IN SQL

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: "category_id"
});


// Categories have many Products
Category.hasMany(Product, {
    foreignKey: "category_id"
});


// Products belongToMany Tags (through ProductTag)
// these will allow products to have multiple tags and for tags to be associated with many products
Product.belongsToMany(Tag, {
    through: ProductTag,
    as: "productTag_tag",
    foreignKey: "product_id"
  });


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    as: "productTag_product",
    foreignKey: "tag_id"
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
