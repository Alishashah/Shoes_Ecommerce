const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cartData: {
    type: Array,
    required: true,
  }
});

module.exports = mongoose.model("cart",cartSchema)
