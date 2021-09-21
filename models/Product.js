const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  category: { type: String, required: true },
  countInStock: {type: Number, required: true},
});
module.exports = Product = model("product", productSchema);
