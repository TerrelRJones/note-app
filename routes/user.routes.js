const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");

const { User } = require("../models");

// Get USER AND ALL NOTES
router.get("/user", async (req, res) => {
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

router.get("/users", async (req, res) => {
  const user = await User.findAll();

  return res.json(user);
});

module.exports = router;
