const { BadRequestError } = require("../errors");
const User = require("../models/User");

const StatusCodes = require("http-status-codes");

const bcryptjs = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashPassword = await bcryptjs.hash(password, 10);

  const tempUser = { name, email, password: hashPassword };

  const user = await User.create(tempUser);
  console.log(user);

  res.json(user);
  // res.status(StatusCodes.CREATED).json(user);
};
const login = async (req, res) => {
  res.send("login user");
};

module.exports = { register, login };
