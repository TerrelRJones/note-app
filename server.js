const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const morgan = require("morgan");

const sequelize = require("sequelize");
const noteRouter = require("./routes/note.routes");
const userRouter = require("./routes/user.routes");

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/create", noteRouter);
app.use("/", userRouter);

app.listen(port, async () => {
  console.log(`serving on port: ${port}`);
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
});
