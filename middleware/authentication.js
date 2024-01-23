const User = require("../models/User");
const JWT = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const autheader = req.headers.authorization;

  if (!autheader || !autheader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = autheader.split(" ")[1];

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId, name: payload.userName };
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  next();
};

module.exports = auth;
