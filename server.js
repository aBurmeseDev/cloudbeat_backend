const createError = require("http-errors");
const express = require("express");

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
require("./db/db");

const apiRouter = require("./routes/api");
const usersRouter = require("./routes/users");

const app = express();
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", apiRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler

app.listen(process.env.PORT, err => {
  console.log(err || "server listening on port on" + process.env.PORT);
});

module.exports = app;
