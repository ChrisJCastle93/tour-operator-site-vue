var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require("express").Router();
const Reviews = require("../models/Review.model");
const Tour = require("../models/Tours.model");
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    Reviews.find()
        .then((reviews) => {
        console.log('FOUND REVIEWS', reviews);
        res.status(200).json(reviews);
    })
        .catch((error) => {
        res.status(500).json(error);
    });
}));
router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    Reviews.findOne({ product: req.params.id })
        .then((reviews) => {
        console.log('FOUND REVIEWS', reviews);
        res.status(200).json(reviews);
    })
        .catch((error) => {
        res.status(500).json(error);
    });
}));
router.post("/new", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const review = req.body;
        const response = yield Reviews.create(review);
        const updatedTour = yield Tour.findByIdAndUpdate({ _id: review.tour }, { $push: { reviews: response._id } }, { new: true });
        res.status(200).json("created review");
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = router;
