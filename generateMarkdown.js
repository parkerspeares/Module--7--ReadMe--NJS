// Function to return a license badge based on the license passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'BSD 3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    default:
      return '';
  }
}

// Function to return the license link based on the license passed in
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPLv3':
      return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. See ${renderLicenseLink(license)} for more information.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

`;
}

export default generateMarkdown;