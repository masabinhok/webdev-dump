const Chat = require("../models/chat");

async function handleChat(req, res) {
  const { title, description } = req.body;
  await Chat.create({
    title,
    description,
  });
  res.render("realchat", {
    message: "Chat created successfully!!",
    
  });
}

async function showChat(req, res) {
  const chats = await Chat.find();
  res.render("chat", {
    chats,
  });
}

module.exports = {
  handleChat,
  showChat,
};
