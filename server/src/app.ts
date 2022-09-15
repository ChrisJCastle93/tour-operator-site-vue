export { };
    
require("dotenv/config");
require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);
const tourRoutes = require("./routes/tours.routes");
app.use("/api/tours", tourRoutes);
const checkoutRoutes = require("./routes/checkout.routes");
app.use("/api/checkout", checkoutRoutes);
const reviewRoutes = require("./routes/review.routes");
app.use("/api/reviews", reviewRoutes);

require("./error-handling")(app);

module.exports = app;
