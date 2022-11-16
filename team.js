//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");

//classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//cards
const managerCard = require("./src/managerCard");
const engineerCard = require("./src/engineerCard");
const internCard = require("./src/internCard");

//empty array to push team members to
const team = [];

//function to prompt user for manager info
function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      team.push(manager);
      addTeamMember();
    });
}

//function to prompt user to add engineer or intern
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I have enough members.  Let me see my team!",
        ],
      },
    ])
    .then((data) => {
      if (data.role === "Engineer") {
        engineerInfo();
      } else if (data.role === "Intern") {
        internInfo();
      } else {
        generateTeam();
      }
    });
}

//function to prompt user for engineer info
function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      team.push(engineer);
      addTeamMember();
    });
}

//function to prompt user for intern info
function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      team.push(intern);
      addTeamMember();
    });
}

//function to generate team
function generateTeam() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

//function to render team
function render(team) {
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
  );
  return generateHTML(html.join(""));
}

//function to generate HTML
function generateHTML(html) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="style.css">
  <title>Team Profile Generator</title>
  <style>
  body {
    background-color: slategrey; ;
  }
  .card-header {
    background-color: steelblue;
  }
  .card-body {
    background-color: white;
  }
  .card {
    width: 18rem;
    margin: 20px;
    border: 2px solid black;
  }
  .navbar {
    height: 5em;
    background-color: steelblue;
    
  }
  </style>


  </head>

  <body>
  <header>
  <nav class="navbar navbar-dark">
  <span class="navbar-brand mb-0 h4 w-100 text-center">My Team</span>
  </nav>
  </header>
  <main>
  <div class="container">
  <div class="row">
  <div class="team-area col-12 d-flex justify-content-center">
  ${html}
  </div>
  </div>
  </div>
  </main>
  </body>

  </html>
  `;
}

managerInfo();
