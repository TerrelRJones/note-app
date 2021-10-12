const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const morgan = require("morgan");

const sequelize = require("./models");
const noteRouter = require("./routes/note.routes");
const userRouter = require("./routes/user.routes");
const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");
const dashboardRouter = require("./routes/dashboard.routes");

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", dashboardRouter);
app.use("/create", noteRouter);
app.use("/", userRouter);

app.listen(port, async () => {
  console.log(`serving on port: ${port}`);
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
});
