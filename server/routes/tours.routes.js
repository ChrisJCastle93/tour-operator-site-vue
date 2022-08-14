const router = require("express").Router();
const events = require('../utils/db.json').events
/* GET home page */
router.get("/", (req, res, next) => {
  res.json(events);
});

router.get("/:id", (req, res, next) => {
  const tour = events.filter(tour => tour.id == req.params.id);
  res.json(tour);
});

module.exports = router;
