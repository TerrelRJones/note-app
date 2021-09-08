const { Router } = require("express");
const router = Router();

const { User } = require("../models");

// Create User
router.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check user email & username

    // hash pasword

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

// Get USER AND ALL NOTES
router.get("/user/", async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  try {
    const user = await User.findAll({
      where: { user_id: user_id },
      include: "notes",
    });

    return res.json(user);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Can't retrieve user");
  }
});

module.exports = router;
