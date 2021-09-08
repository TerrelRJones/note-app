const { Router } = require("express");
const router = Router();
const { Notes, User } = require("../models");

// CREATE NOTE
router.post("/note", async (req, res) => {
  const { userUuid, note } = req.body;
  try {
    const user = await User.findOne({ where: { user_id: userUuid } });

    const notes = await Notes.create({ note, userId: user.id });

    return res.json(notes);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Error");
  }
});

// GET ALL NOTES W/ USER ATTACHED
router.get("/note", async (req, res) => {
  try {
    const notes = await Notes.findAll({
      include: "user",
    });

    return res.json(notes);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Error retrieving notes");
  }
});

module.exports = router;
