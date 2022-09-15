const router = require("express").Router();
const authRoutes = require("./auth.routes");
/* GET home page */
router.get("/", (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction): Promise<void> => {
  res.json("All good in here");
});
// router.use("/auth", authRoutes);
module.exports = router;
