const Employee = require("../library/Employee.js");
const Engineer = require("../library/Engineer.js");

function Engineer(name, id, email, GitHub) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number" || isNaN(id) || id < 0) {
    throw new Error("Expected parameter 'id' to be a non-negative number");
  }

  if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  if (typeof GitHub !== "string" || !GitHub.trim().length) {
    throw new Error("Expected parameter 'GitHub' to be a non-empty string");
  }

}