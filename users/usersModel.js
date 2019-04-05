const db = require("../database/dbConfig");

module.exports = {
  getAllUsersByDepartment
};

function getAllUsersByDepartment(department) {
  return db("users").where({ department });
}

// function getAllUsers() {
//     return db("users");
//   }
