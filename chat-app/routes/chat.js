const express = require("express");
const router = express.Router();
const { handleChat, showChat } = require("../controllers/chat");

router.post("/", handleChat);

router.get("/show", showChat);

router.get("/realchat", (req, res) => {
  res.render("realchat");
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chat/show");
});

module.exports = router;
