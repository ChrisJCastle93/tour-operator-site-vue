const router = require("express").Router();
const { Route } = require("../types/routes.types.ts");

router.get("/", (req, res, next) =>{
  res.json("All good in here");
});

module.exports = router;
