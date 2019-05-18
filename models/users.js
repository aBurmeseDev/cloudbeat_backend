const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  songs: [Object]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
