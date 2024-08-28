const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const user = await User.find({
    name: "Sabin Shrestha",
  });

  const { name } = user[0];
  return res.render("home", {
    name,
  });
});

router.get("/login", async (req, res) => {
  return res.render("login");
});
router.get("/signup", async (req, res) => {
  return res.render("signup");
});

module.exports = router;
