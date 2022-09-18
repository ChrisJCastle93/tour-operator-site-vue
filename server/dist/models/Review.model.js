"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    name: String,
    rating: Number,
    review: String,
    tour: { type: mongoose_1.Schema.Types.ObjectId, ref: "Tour" },
}, {
    timestamps: true,
});
const Review = (0, mongoose_1.model)("Review", reviewSchema);
module.exports = Review;
