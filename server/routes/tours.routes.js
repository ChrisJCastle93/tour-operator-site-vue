const e = require("express");

const router = require("express").Router();
const events = require('../utils/db.json').events

/* GET home page */
router.get("/", (req, res, next) => {
  if (req.query.query) {
    console.log('There are ' + events.length + ' events')
    const filteredEvents = events.filter(event => {
      return event.title.toLowerCase().includes(req.query.query.toLowerCase()) || event.city.toLowerCase().includes(req.query.query.toLowerCase())
    }) 
    res.json(filteredEvents)
  } else {
    res.json(events);
  }
});

router.get("/:id", (req, res, next) => {
  const tour = events.filter(tour => tour.id == req.params.id);
  res.json(tour);
});

module.exports = router;
