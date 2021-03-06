const { Router } = require("express");
const router = Router();
const { Notes, User } = require("../models");
const authorization = require("../middleware/authorization");

// CREATE NOTE
router.post("/note", authorization, async (req, res) => {
  const { title, note } = req.body;
  console.log(title + " " + note);
  try {
    const user = await User.findOne({ where: { user_id: req.user } });
    // console.log(user);

    const notes = await Notes.create({ userId: user.id, title, note });

    return res.json(notes);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Error");
  }
});

// GET ALL NOTES W/ USER ATTACHED
router.get("/note/", async (req, res) => {
  // const { userId } = req.params;

  try {
    const notes = await Notes.findAll({
      // where: { userId: userId },
      include: "user",
    });

    return res.json(notes);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Error retrieving notes");
  }
});

// DELETE NOTE
router.delete("/note/:note_id", authorization, async (req, res) => {
  const { note_id } = req.params;
  const { userId } = req.body;
  // const { note_id, user } = req.body;
  try {
    await Notes.destroy({
      where: { note_uuid: note_id, userId: userId },
    });

    return res.status(200).json("Note Deleted");
  } catch (e) {
    console.error(e.message);
    res.json({ msg: "Not your note" });
  }
});

// EDIT NOTE
router.put("/note/:note_id", authorization, async (req, res) => {
  const { note_id } = req.params;
  const { userId, title, note } = req.body;

  try {
    await Notes.update(
      { title: title, note: note },
      {
        where: {
          note_uuid: note_id,
          userId: userId,
        },
      }
    );
    return res.status(200).json("Note updated");
  } catch (e) {
    console.error(e.message);
    res.json({ msg: "Note your note to edit" });
  }
});

module.exports = router;
