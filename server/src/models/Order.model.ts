import { Schema, model } from "mongoose"
import { OrderInterface } from "../types/models.interfaces";

const orderSchema = new Schema<OrderInterface> (
  {
    id: String,
    products: Array,
    paid: {
      type: Boolean,
      default: false,
    },
    name: String,
    email: String,
  }
);

const Order = model<OrderInterface & Document>("Order", orderSchema);

module.exports = Order;
