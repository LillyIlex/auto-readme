const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const promptUser = () => {

    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: "input",
                name: "title",
                message: "What is your title project?"
            },
            {
                type: "input",
                name: "description",
                message: "Enter prjoect description:"
            },
            {
                type: "input",
                name: "contents",
                message: "Enter headings for contents:"
            },
            {
                type: "input",
                name: "installation",
                message: "Enter instrcutions for installation:"
            },
            {
                type: "input",
                name: "usage",
                message: "Enter instruction on usage:"
            },
            {
                type: "input",
                name: "license",
                message: "Enter license info:"
            },
            {
                type: "input",
                name: "contributing",
                message: "Enter your contributors"
            },
            {
                type: "input",
                name: "tests",
                message: "Enter what tests you ran:"
            },
            {
                type: "input",
                name: "userQuestions",
                message: "Enter an email address for questions:"
            },
        ])
        .then((answers) => {
            // let readMe = answers.description
                // console.log(answers.description)
    
             fs.writeFile(path.join(process.cwd() + "/dist/",'readme.md'), generateMarkdown(answers), (err) => err && console.error(err))
        });

    }

promptUser()
// array of questions for user
/*
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
*/