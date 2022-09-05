const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    id: String,
    products: Array,
    paid: {
      type: Boolean,
      default: false
    },
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
