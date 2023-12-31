const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://aashutosh:Chabahil11@cluster0.lcsq3pt.mongodb.net/";

//Middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

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
