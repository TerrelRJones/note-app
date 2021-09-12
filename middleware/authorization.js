const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const token = req.header("token");
    // const token = authHeader.split(" ")[1];
    console.log(token);

    if (!token) {
      console.log("fail");
      return res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload.user;

    console.log("Authorized");
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Not Authorized");
  }
  next();
};
