const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
