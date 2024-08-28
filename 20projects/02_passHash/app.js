const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT;
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//routes
const userRoutes = require("./routes/user");

//handle routes
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
