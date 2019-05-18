const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (err) {
    res.json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (err) {
    res.json({ err });
  }
});
router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    console.log(user);
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.json({ err: err });
  }
});
router.post("/register", async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    req.session.userId = createdUser._id;
    res.json({
      data: createdUser,
      success: true
    });
  } catch (err) {
    res.json({ err });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json({
      status: 200,
      data: updatedUser
    });
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.json({
      success: true
    });
  } catch (err) {
    res.json(err);
  }
});
router.post("/login", async (req, res) => {
  console.log("logging");
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    res.json({
      user: foundUser,
      success: foundUser ? false : true
    });
  } catch (err) {
    res.json({ err });
  }
});
module.exports = router;
