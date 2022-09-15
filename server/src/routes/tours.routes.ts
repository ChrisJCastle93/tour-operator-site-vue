const router = require("express").Router();
const Tour = require("../models/Tours.model");
import { Request, Response, NextFunction } from "express";

/* GET home page */
router.get("/", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const events = await Tour.find();
  if (req.query.query) {
    const filteredEvents = events.filter((event) => {
      return (
        event.title
          .toLowerCase()
          .includes(req.query.query as string)
          .toLowerCase() ||
        event.city
          .toLowerCase()
          .includes(req.query.query as string)
          .toLowerCase()
      );
    });
    res.json(filteredEvents);
  } else {
    res.json(events);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const event = await Tour.findById(req.params.id).populate("reviews");
  event.reviews = event.reviews.filter(Boolean);
  res.json(Array.of(event));
});

router.post("/new", (req: Request, res: Response, next: NextFunction): void => {
  Tour.create(req.body)
    .then((response) => {})
    .catch((error) => console.log(error));
});

module.exports = router;
