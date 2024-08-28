const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Render signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Render login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle user signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    // Create a new user
    await User.create({
      name,
      email,
      password,
    });
    // Redirect to login page on success
    res.redirect("/user/login");
  } catch (err) {
    console.error(err);
    res.render("signup", {
      error: "An error occurred during signup. Please try again.",
    });
  }
});

//handle user login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });

  if (!user) {
    res.render("login", {
      error: "Invalid login credentials",
    });
  }

  res.redirect("/");
});

module.exports = router;
