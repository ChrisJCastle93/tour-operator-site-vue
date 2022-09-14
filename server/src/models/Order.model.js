const { Schema, model, Document } = require("mongoose");
const { OrderInt } = require("../types/models.interfaces.ts");

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
  }
);

const Order = model<OrderInt & Document>("Order", orderSchema);

module.exports = Order;
