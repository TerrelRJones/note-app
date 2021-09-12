const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const { User } = require("../models");

// Create User
router.post("/register", async (req, res) => {
  const { username, email } = req.body;
  let password = req.body.password;
  try {
    // Check user email & username

    // hash pasword
    // const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, 12);

    //create user
    const newUser = await User.create({
      username,
      email,
      password,
    });

    const user = await User.findOne({ where: { email: email } });

    //token
    const token = jwtGenerator(user.user_id);

    return res.status(200).json({ user, token: token });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "Error" });
  }
});

module.exports = router;
