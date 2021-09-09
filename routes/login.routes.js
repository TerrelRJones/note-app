const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");

const { User } = require("../models");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const password_valid = await bcrypt.compare(password, user.password);
      //   console.log("email found");
      if (password_valid) {
        // console.log("logged in");
        return res.status(200).json(user);
      }
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Invalid password");
  }
});

module.exports = router;
