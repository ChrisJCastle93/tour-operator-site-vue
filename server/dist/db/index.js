// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const MONGODB_URI = "mongodb+srv://test:test@cluster0.ilm4fbo.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
})
    .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
})
    .catch((error) => {
    console.error("Error connecting to the database", error);
});
