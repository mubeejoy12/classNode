const express = require("express");
const { handleSignUp } = require("../controler/auth");

const route = express.Router();

route.post("/signup", handleSignUp);

module.exports = route;
