const router = require("express").Router();
const Reviews = require("../models/Review.model");
const Tour = require("../models/Tours.model");


router.get("/", async (req, res) => {
    Reviews.find()
      .then((reviews) => {
        console.log('FOUND REVIEWS', reviews)
        res.status(200).json(reviews);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
});

router.get("/:id", async (req, res) => {
    Reviews.findOne({product: req.params.id})
      .then((reviews) => {
        console.log('FOUND REVIEWS', reviews)
        res.status(200).json(reviews);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
});

router.post("/new", async (req, res) => {
  try {
    const review = req.body;
    const response = await Reviews.create(review);
    const updatedTour = await Tour.findByIdAndUpdate({ _id: review.tour }, { $push: { reviews: response._id } }, { new: true });
    res.status(200).json("created review");
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
