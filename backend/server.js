const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json()); // whenever we pass data it will convert to json format
app.use(cors()); //cors to conect frontend with backend

mongoose
  .connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

app.listen(3001, () => console.log("server started"));
