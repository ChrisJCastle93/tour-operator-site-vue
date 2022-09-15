import { Schema, model } from "mongoose";
import { ReviewInterface } from "../types/models.interfaces";

const reviewSchema = new Schema<ReviewInterface>(
  {
    name: String,
    rating: Number,
    review: String,
    tour: { type: Schema.Types.ObjectId, ref: "Tour" },
  },
  {
    timestamps: true,
  }
);

const Review = model<ReviewInterface & Document>("Review", reviewSchema);

module.exports = Review;
