const { Schema, model } = require("mongoose");
const tourSchema = new Schema({
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
}, {
    timestamps: true,
});
const Tour = model("Tour", tourSchema);
module.exports = Tour;
