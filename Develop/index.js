// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest")
const generateHTML = require("./utils/generateHTML")
const Employee = require("../library/Employee")
const Manager = require("../library/Manager")
const Engineer = require("../library/Manager")
const Intern = require("../library/Intern")



const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter manager's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email address:",
  },
  {
    type: "input",
    name: "office",
    message: "Enter manager's office number:",
  },
]


function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "ManagerName",
        message: "Enter manager's name:",
      },
      {
        type: "input",
        name: "ManagerID",
        message: "Enter manager's employee ID:",
      },
      {
        type: "input",
        name: "ManagerEmail",
        message: "Enter manager's email address:",
      },
      {
        type: "input",
        name: "ManagerOffice",
        message: "Enter manager's office number:",
      },
  
    ])
    .then(function (responses) {

      data = generateHTML(responses);

      fs.writeFile("index.html", data, function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log("no error");
        }
      });
    });
}

init();
