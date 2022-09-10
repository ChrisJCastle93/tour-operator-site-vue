const router = require("express").Router();
const Reviews = require("../models/Review.model");


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
  const review = req.body;
    Reviews.create(review).then(() => {
        res.status(200).json("created review");
    }).catch ((error) => {
        res.status(500).json(error);
    });
});

module.exports = router;
