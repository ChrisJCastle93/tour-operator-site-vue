const router = require("express").Router();
const Tour = require('../models/Tours.model')

/* GET home page */
router.get("/", async (req, res, next) => {
  const events = await Tour.find()
  if (req.query.query) {
    const filteredEvents = events.filter(event => {
      return event.title.toLowerCase().includes(req.query.query.toLowerCase()) || event.city.toLowerCase().includes(req.query.query.toLowerCase())
    }) 
    res.json(filteredEvents)
  } else {
    res.json(events);
  }
});

router.get("/:id", async (req, res, next) => {
  const event = await Tour.findById(req.params.id).populate("reviews");
  event.reviews = event.reviews.filter(Boolean);
  res.json(Array.of(event));
});

router.post("/new", (req, res, next) => {
  Tour.create(req.body).then((response) => {
  }).catch((error) => console.log(error))
});

module.exports = router;
