// Global package requirements
const fs = require('fs');
const markdowns = require('./Develop/utils/generateMarkdown.js');
const inquirer = require('inquirer');

// User Input questionaire
const questions = [

  // Project name
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

  // Project installation instructions
  {
    type: 'input',
    name: 'installation',
    message: 'Specify the projects installation procedure (Required)',
    validate: projectInstall =>  {
      if (projectInstall) {
        return true;
      }
      else {
        console.log('Installation instructions are required to continue!');
        return false;
      }
    }
  },

  // Project usage guidelines
  {
    type: 'input',
    name: 'guidelines',
    message: 'Specify the projects usage guidelines (Required)',
    validate: projectGuidelines =>  {
      if (projectGuidelines) {
        return true;
      }
      else {
        console.log('Usage guidelines are required to continue!');
        return false;
      }
    }
  },

  // Project contribution guidelines
  {
    type: 'input',
    name: 'contribution',
    message: 'Specify the projects contribution guidelines (Required)',
    validate: projectContribution =>  {
      if (projectContribution) {
        return true;
      }
      else {
        console.log('Contribution guidelines are required to continue!');
        return false;
      }
    }
  },

  // Project testing guidelines
  {
    type: 'input',
    name: 'testing',
    message: 'Specify the projects testing instructions (Required)',
    validate: projectTesting =>  {
      if (projectTesting) {
        return true;
      }
      else {
        console.log('Testing Instructions are required to continue!');
        return false;
      }
    }
  },

  // License options
  {
    type: 'checkbox',
    name: 'licensing',
    message: 'Select a license for the project (Required)',
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    validate: projectLicense =>  {
      if (projectLicense) {
        return true;
      }
      else {
        console.log('Selecting a license required to continue!');
        return false;
      }
    }
  },

  // GitHub  username
  {
    type: 'input',
    name: 'GitHub',
    message: 'Please provide your GitHub username (Required)',
    validate: projectGithub =>  {
      if (projectGithub) {
        return true;
      }
      else {
        console.log('A GitHub username is required to continue!');
        return false;
      }
    }
  },

    // Email Address
    {
      type: 'input',
      name: 'email',
      message: 'Would you like to include your email?',
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
