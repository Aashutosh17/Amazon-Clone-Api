//Importing form Packages
const express = require("express");
const mongoose = require("mongoose");

//Importing From other Files
const authRouter = require("./routes/auth");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://aashutosh:Chabahil11@cluster0.lcsq3pt.mongodb.net/";

//Middleware
app.use(express.json());
app.use(authRouter);

//Connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("MongoDB connection sucessful!");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
