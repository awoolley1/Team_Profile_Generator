

// Create a function to generate HTML file
function generateHTML(responses) {

  return `
// # **Title: ${responses.Title}**

// ${licenseBadgeURL}
// #### **Table of Contents:**
// 1. [*Description*](#description: "Jump to Description")
// 2. [*Installation*](#installation: "Jump to Installation")
// 3. [*Usage*](#usage: "Jump to Usage")
// 4. [*Contributing*](#contributing: "Jump to Contributing")
// 5. [*Tests*](#tests: "Jump to Tests")
// 6. [*Licenses*](#license: "Jump to Licenses")
// 7. [*Questions*](#questions: "Jump to Questions")
  
// ### **Description:**
// ${responses.Description}
  
// ### **Installation:**
// ${responses.Installation}
  
// ### **Usage:**
// ${responses.Usage}
  
// ### **Contributing:**
// ${responses.Contributing}
  
// ### **Tests:**
// ${responses.Tests}
  
// ### **License:**
// ${responses.License}
  
// ### **Questions:**
// Contact me on GitHub @ ${responses.GitHub} or by Email at ${responses.Email}

`;
}

module.exports = generateHTML;