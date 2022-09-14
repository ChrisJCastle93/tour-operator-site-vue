const { Schema, model } = require("mongoose");
const reviewSchema = new Schema({
    name: String,
    rating: Number,
    review: String,
    tour: { type: Schema.Types.ObjectId, ref: "Tour" },
}, {
    timestamps: true,
});
const Review = model("Review", reviewSchema);
module.exports = Review;
