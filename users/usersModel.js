const db = require("../database/dbConfig");

module.exports = {
  getAllUsers
};

function getAllUsers() {
  return db("users");
}
