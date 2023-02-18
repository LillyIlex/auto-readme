// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

## Description
  ${answers.description}
  
## Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

## Usage
  ${answers.usage}

  Here is a link to the deployed webpage, <${answers.deployedLink}>
  
 ## Installation
 ${answers.installation}

## Credits
  ${answers.credit}

## License
  ${answers.license} 

### Tests
  ${answers.tests}

### Questions
  You can email any questions you have to me at <${answers.userQuestions}>

  You can checkout my GitHub here <${answers.github}>

`;
}

module.exports = generateMarkdown;