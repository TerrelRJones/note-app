const Router = require("express");
const router = Router();
const authorization = require("../middleware/authorization");
const { User } = require("../models");

router.get("/dashboard", authorization, async (req, res) => {
  try {
    const user = await User.findOne({ where: { user_id: req.user } });

    res.json(user);
    console.log(user.id);
  } catch (e) {
    console.error(e.message);
    return res.status(500).json("Servor Error");
  }
});

module.exports = router;
