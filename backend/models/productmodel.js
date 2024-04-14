const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
    slug: {
      type: String,
    },
    items_left: {
      type: Number,
    },

    quantity: {
      type: Number,
      default: 1,
    },
    userQuantity: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    category: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productschema);
module.exports = Product;
