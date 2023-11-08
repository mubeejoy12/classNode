const express = require("express");
const cors = require("cors");
// import {route} from "./router/auth";
// const {route} = require('./router');

// const productRoute = require("./router/products");
// const router = require("./router/products");
// const userRoute = require("./model/user");
const mongoose = require("mongoose");
const route = require("./router/auth");
// const user = require("./router/scheme/user");

const app = express();

let mongoUrl =
  "mongodb+srv://Mubarak:Mubarak@learnnode.ojz7xss.mongodb.net/userTwo";

app.use(express.json());
// app.use("/api/v1/products", productRoute);
// app.use("/api/v1/user", userRoute);
app.use("/api/v1/", route);

// app.post("/createUser", function (req, res) {
//   console.log(req.body);
//   res.json({ message: "good", data: req.body });
// });

// router.get('/user', function(req,res){
//     res.json('sucess')
// })

const port = 4000;
// app.listen(port, "localhost", function () {
//   console.log("server is running ");
// });

async function start() {
  try {
    const con = await mongoose.connect(mongoUrl);
    app.get("/", (req, res) => {
      res.send("Hello");
    });
    app.listen(port, "localhost", function () {
      console.log("server is running ", port);
    });
  } catch (error) {
    console.log(error.message);
  }
}

//  post data
app.post("/createUser", async (req, res) => {
  const { name, email } = req.body;
  try {
    const craeteUsers = await user.create({ name, email });
    res.status(200).json(craeteUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  get data
app.get("/getUsers", async (req, res) => {
  try {
    const getUserTask = await user.find();
    res.status(200).json(getUserTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

start();
