// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}
  
  ## Contents
  ${answers.contents}
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributors
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.userQuestions}

`;
}

module.exports = generateMarkdown;