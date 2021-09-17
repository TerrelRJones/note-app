const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middleware/authorization");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    const validPassword = await bcrypt.compare(password, user.password);
    // authenticate user
    if (!validPassword) {
      return res.status(500).json("INCORRECRT PASSWORD");
    }

    // token
    const token = jwtGenerator(user.user_id);

    return res.json({ token });

    // res.status(200).json("LOGGED IN");
  } catch (e) {
    console.log(e.message);
    res.status(500).json("error");
  }
});

router.get("/verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (e) {
    console.log(e.message);
    res.status(403).json("error");
  }
});

module.exports = router;
