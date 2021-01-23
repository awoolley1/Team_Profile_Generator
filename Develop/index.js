// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest")
const generateHTML = require("./utils/generateMarkdown")


function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "What is the title of your application?",
      },
      {
        type: "input",
        name: "Description",
        message: "What is the description of your application?",
      },
      {
        type: "input",
        name: "Installation",
        message: "Write installation instructions for your application",
      },
      {
        type: "input",
        name: "Usage",
        message: "Write usage instructions for your application",
      },
      {
        type: "input",
        name: "Contributing",
        message: "What are contribution guidelines for your application?",
      },
      {
        type: "input",
        name: "Tests",
        message: "What are test instructions for your application?",
      },
      {
        type: "list",
        name: "License",
        message: "Select a license type?",
        choices: ["MIT", "Apache", "BSD", "ISC", "GPL"],
      },
      {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is your email address?",
      },
    ])
    .then(function (responses) {
      data = generateMarkdown(responses);

      fs.writeFile("README.md", data, function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log("no error");
        }
      });
    });
}

init();
