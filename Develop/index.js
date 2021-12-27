// TODO: Include packages needed for this application
const fs = require('fs');
const markdowns = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the projects title? (Required)',
    validate: projectName =>  {
      if (projectName) {
        return true;
      }
      else {
        console.log('A project name is required to continue!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
    throw err;
    console.log('Accomplished! Information succesfully submitted to the README file')
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(userInput){
    console.log(userInput)
    writeToFile("README.md", markdowns(userInput));
  });
}

// Function call to initialize app
init();
