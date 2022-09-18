"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    id: String,
    products: Array,
    paid: {
        type: Boolean,
        default: false,
    },
    name: String,
    email: String,
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
module.exports = Order;
