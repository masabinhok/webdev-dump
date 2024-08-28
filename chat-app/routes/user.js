const express = require("express");
const router = express.Router();

const {
  handleLogin,
  handleSignup,
  handleLogout,
} = require("../controllers/user");

router.post("/signup", handleSignup);

router.post("/login", handleLogin);

router.get("/logout", handleLogout);

module.exports = router;
