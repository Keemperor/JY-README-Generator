// Global package requirements
const fs = require('fs');
const markdowns = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// User Input questionaire
const questions = [
  // Prooject name
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
  // Project description
  {
    type: 'input',
    name: 'description',
    message: 'Please describe the project! (Required)',
    validate: projectDescription =>  {
      if (projectDescription) {
        return true;
      }
      else {
        console.log('A project description is required to continue!');
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
