const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const generateHTML = require("./generateHTML");
const Employee = require("./library/Employee");
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

var studentType;

const allEmployees = [];

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
];

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
];

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
];

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "decisiontree",
        message: "What type of employee do you want to input",
        choices: ["Manager", "Engineer", "Intern", "DONE"],
      },
    ])
    .then(function (responses) {
      var studentTypeArray;

      if (responses.decisiontree == "Manager") {
        studentTypeArray = managerQuestions;
      } else if (responses.decisiontree == "Engineer") {
        studentTypeArray = engineerQuestions;
      } else if (responses.decisiontree == "Intern") {
        studentTypeArray = internQuestions;
      } else {
        studentTypeArray = "Done";
        data = generateHTML(allEmployees);
        fs.writeFile("index.html", data, function (error) {
          if (error) {
            console.log(error);
          } else {
            console.log("no error");
          }
        });
      }

      if (studentTypeArray !== "Done") {
        inquirer.prompt(studentTypeArray).then(function (inputs) {
          studentType = responses.decisiontree;
          if (studentType == "Manager") {
            var Manager1 = new Manager(
              inputs.managername,
              inputs.managerid,
              inputs.manageremail,
              inputs.manageroffice
            );
            allEmployees.push(Manager1);
          } else if (studentType == "Engineer") {
            var Engineer1 = new Engineer(
              inputs.engineername,
              inputs.engineerid,
              inputs.engineeremail,
              inputs.engineergithub
            );
            allEmployees.push(Engineer1);
          } else if (studentType == "Intern") {
            var Intern1 = new Intern(
              inputs.internname,
              inputs.internid,
              inputs.internemail,
              inputs.internschool
            );
            allEmployees.push(Intern1);
          } 
          console.log(allEmployees)
          init();
        });
      }
    });
}

init();
