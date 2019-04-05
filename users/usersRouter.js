const express = require("express");
const jwt = require("jsonwebtoken");
const secrets = require("../authorization/secrets");

const db = require("./usersModel");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  const departments = req.decodedJwt.roles;
  db.getAllUsersByDepartment(departments)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was a problem retrieving these users!" });
    });
});

function restricted(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecrets, (err, decodedToken) => {
      if (!err) {
        req.decodedJwt = decodedToken;
        next();
      } else {
        res.status(401).json({ message: "Invalid token!" });
      }
    });
  } else {
    res.status(401).json({ message: "Invalid credentials!" });
  }
}

module.exports = router;
