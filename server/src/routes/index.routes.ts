const router = require("express").Router();
import { Request, Response, NextFunction } from "express";

router.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json("All good in here");
});

module.exports = router;
