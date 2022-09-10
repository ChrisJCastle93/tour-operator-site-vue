const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    name: String,
    rating: Number,
    review: String,
    product: Number,
  },
  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
