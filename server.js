console.clear();
// import express
const express = require("express");
const connectDB = require("./config/dbConnect");
// instance app
const app = express();
require("dotenv").config();

connectDB();

// router
// user
app.use(express.json());

app.use("/user", require("./routes/user"));

app.use("/product", require("./routes/product"));

// PORT
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);