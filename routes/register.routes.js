const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");

const { User } = require("../models");

// Create User
router.post("/register", async (req, res) => {
  const { username, email } = req.body;
  let { password } = req.body;
  try {
    // Check user email & username

    // hash pasword
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
      username,
      email,
      password,
    });

    return res.json(user);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Error");
  }
});

module.exports = router;
