//importing the required modules
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

//define the PORT
const PORT = process.env.PORT || 3000;

//initialize the express app
const app = express();

//connect to the data base
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Error", err);
  });

//set ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));

// import routes
const userRoute = require("./routes/user");
app.use("/user", userRoute);

//handle routes
app.get("/", (req, res) => {
  res.render("home");
});

//hosting the app on the server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
