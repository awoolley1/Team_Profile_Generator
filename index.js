// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest")
const generateHTML = require("./generateHTML")
const Employee = require("./library/Employee")
const Manager = require("./library/Manager")
const Engineer = require("./library/Manager")
const Intern = require("./library/Intern")



const managerQuestions = [
  {
    type: "input",
    name: "managername",
    message: "Enter manager's name:",
  },
  {
    type: "input",
    name: "managerid",
    message: "Enter manager's employee ID:",
  },
  {
    type: "input",
    name: "manageremail",
    message: "Enter manager's email address:",
  },
  {
    type: "input",
    name: "manageroffice",
    message: "Enter manager's office number:",
  },
]

const engineerQuestions = [
  {
    type: "input",
    name: "engineername",
    message: "Enter engineer's name:",
  },
  {
    type: "input",
    name: "engineerid",
    message: "Enter engineer's employee ID:",
  },
  {
    type: "input",
    name: "engineeremail",
    message: "Enter engineer's email address:",
  },
  {
    type: "input",
    name: "engineergithub",
    message: "Enter engineer's GitHub Username:",
  },
]

const internQuestions = [
  {
    type: "input",
    name: "internname",
    message: "Enter interns's name:",
  },
  {
    type: "input",
    name: "internid",
    message: "Enter intern's employee ID:",
  },
  {
    type: "input",
    name: "internemail",
    message: "Enter intern's email address:",
  },
  {
    type: "input",
    name: "internschool",
    message: "Enter intern's school:",
  },
]


function init() {
  inquirer
    .prompt([
      // {
      //   type: "input",
      //   name: "ManagerName",
      //   message: "Enter manager's name:",
      // },
      // {
      //   type: "input",
      //   name: "ManagerID",
      //   message: "Enter manager's employee ID:",
      // },
      // {
      //   type: "input",
      //   name: "ManagerEmail",
      //   message: "Enter manager's email address:",
      // },
      // {
      //   type: "input",
      //   name: "ManagerOffice",
      //   message: "Enter manager's office number:",
      // },
  
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
