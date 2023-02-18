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
                message: "Enter project description:"
            },
            {
                type: "input",
                name: "installation",
                message: "Enter instructions for installation:"
            },
            {
                type: "input",
                name: "usage",
                message: "Enter instruction on usage:"
            },
            {
                type: "rawlist",
                name: "license",
                message: "Enter license info:",
                choices: ["N/A", "MIT", "GNU"]
            },
            {
                type: "input",
                name: "credit",
                message: "Enter the contributors you would like to give credit to:"
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
            {
                type: "input",
                name: "github",
                message: "Enter your GitHub link:"
            },
            {
                type: "input",
                name: "deployedLink",
                message: "Enter the link to the deployed webpage:"
            },
        ])
        .then((answers) => {
            // let readMe = answers.description
                // console.log(answers.description)
    
             fs.writeFile(path.join(process.cwd() + "/dist/",'readme.md'), generateMarkdown(answers), (err) => err && console.error(err))
        });

    }

promptUser()
