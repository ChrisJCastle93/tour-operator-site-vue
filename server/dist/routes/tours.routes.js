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
const Tour = require('../models/Tours.model');
/* GET home page */
router.get("/", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const events = yield Tour.find();
    if (req.query.query) {
        const filteredEvents = events.filter(event => {
            return event.title.toLowerCase().includes(req.query.query.toLowerCase()) || event.city.toLowerCase().includes(req.query.query.toLowerCase());
        });
        res.json(filteredEvents);
    }
    else {
        res.json(events);
    }
}));
router.get("/:id", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const event = yield Tour.findById(req.params.id).populate("reviews");
    event.reviews = event.reviews.filter(Boolean);
    res.json(Array.of(event));
}));
router.post("/new", (req, res, next) => {
    Tour.create(req.body).then((response) => {
    }).catch((error) => console.log(error));
});
module.exports = router;
