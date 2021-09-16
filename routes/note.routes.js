const { Router } = require("express");
const router = Router();
const { Notes, User } = require("../models");
const authorization = require("../middleware/authorization");

// CREATE NOTE
router.post("/note", async (req, res) => {
  const { userUuid, title, note } = req.body;
  try {
    const user = await User.findOne({ where: { user_id: userUuid } });

    const notes = await Notes.create({ userId: user.id, title, note });

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

// // GET ALL NOTES
// router.get("/notes", async (req, res) => {
//   const notes = await Notes.findAll({ include: "user" });

//   return res.json(notes);
// });

// DELETE NOTE
router.delete("/note/:note_id", async (req, res) => {
  // const { note_id } = req.body;
  const { note_id } = req.params;
  const { user } = req.params;
  console.log(note_id + " " + user_id);
  try {
    await Notes.destroy({
      where: { note_uuid: note_id } && { user_id: user.user_id },
    });

    return res.status(200).json("Note Deleted");
  } catch (e) {
    console.error(e.message);
    res.json({ msg: "Not your note" });
  }
});

module.exports = router;
