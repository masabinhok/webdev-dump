const User = require("../models/user");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/login");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  console.log(user);

  if (!user) {
    res.render("login", {
      message: "Invalid email or password",
    });
  }

  return res.redirect("/");
}

async function handleLogout(req, res) {
  res.redirect("/login");
}

module.exports = {
  handleSignup,
  handleLogin,
  handleLogout,
};
