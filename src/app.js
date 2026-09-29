require("dotenv").config();
const express = require("express");
const app = express();

const morgan = require("morgan");
const connectDB = require("./utils/connectDb");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", require("./routes/users.routes"));
app.use("/api/books", require("./routes/books.routes"));

connectDB(app);