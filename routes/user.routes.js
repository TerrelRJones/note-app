const { Router } = require("express");
const router = Router();

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

// GET ALL USERS
router.get("/users", async (req, res) => {
  const user = await User.findAll();

  return res.json(user);
});

// DELETE USER
router.delete("/user", async (req, res) => {
  const { user_id } = req.body;

  await User.destroy({ where: { user_id: user_id } });

  return res.status(200).json(`${user_id.username} was deleted.`);
});

module.exports = router;
