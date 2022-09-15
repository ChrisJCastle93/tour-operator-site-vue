import { Schema, model } from "mongoose";
import { ToursInterface } from "../types/models.interfaces";

const tourSchema = new Schema<ToursInterface>(
  {
    title: String,
    city: String,
    images: [String],
    price: Number,
    summary: String,
    duration: Number,
    freeCancellation: Boolean,
    highlights: [String],
    fullDescription: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: true,
  }
);

const Tour = model<ToursInterface & Document>("Tour", tourSchema);

module.exports = Tour;
