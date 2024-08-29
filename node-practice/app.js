const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("./models/user");
const postModel = require("./models/post");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.err(err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  const { email, password, username } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = userModel.create({
        username,
        email,
        password: hash,
      });

      let token = jwt.sign(
        {
          email,
          userid: user._id,
        },
        "sabun"
      );
      res.cookie("token", token);
      res.send("registerd");
    });
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign(
        {
          email,
          userid: user._id,
        },
        "sabun"
      );
      res.cookie("token", token);
      res.status(200).send("User logged In");
    } else res.redirect("/login");
  });
});

app.get("/logout", async (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/profile", isLoggedIn, (req, res) => {
  res.send(req.user);
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.send("Please Login");
  } else {
    let data = jwt.verify(req.cookies.token, "sabun");
    req.user = data;
  }
  next();
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
