const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");


const app = express();


app.use(express.json());
app.use(cors());

app.use(passport.initialize());

mongoose
  .connect("mongodb+srv://shivanshudobhal:CtjwRCvZJBmq4X5d@cluster0.x274jaz.mongodb.net/", { useNewUrlParser: true })
  .then((res) => console.log("Mongo connection success"))
  .catch((err) => console.log("Mongo connection error\n", err));

const userRouter = require("./routes/userRouter");
const imageRouter = require("./routes/imageRouter");

app.use("/users", userRouter);
app.use("/models/images", imageRouter);

app.listen(process.env.PORT || 3000, () => console.log("server running"));
