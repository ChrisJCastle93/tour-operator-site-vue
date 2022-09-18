"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tourSchema = new mongoose_1.Schema({
    title: String,
    city: String,
    images: [String],
    price: Number,
    summary: String,
    duration: Number,
    freeCancellation: Boolean,
    highlights: [String],
    fullDescription: String,
    reviews: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Review" }],
}, {
    timestamps: true,
});
const Tour = (0, mongoose_1.model)("Tour", tourSchema);
module.exports = Tour;
