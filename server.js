const inquirer = require("inquirer");
require("console.table");
const db = require("./db");

function start() {
  loadQuestion();
}

function loadQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "input",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee",
          "Quit",
        ],
      },
    ])
    .then((res) => {
      switch (res.input) {
        case "view all departments":
          viewAllDepartments();
          break;
        case "view all roles":
         
          break;
        case "view all employees":
         viewAllRoles();
          break;
        case "add a department":
         viewAllEmployees();
          break;
        case "add a role":
          
          break;
        case "add an employee":
         
          break;
        case "update an employee":
         
          break;
        default:
          process.exit()
          break;
      }
    });
}

function viewAllDepartments() {
  db.findDepartments()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => loadQuestion());
}

function viewAllRoles() {
  db.findRoles()
  .then(([data]) => {
    console.table(data);
  })
  .then(()=>loadQuestion());
  
}

function viewAllEmployees() {
  db.findEmployees()
  .then(([data]) =>{
    console.table(data);
  })
  .then(() => loadQuestion());
}
start();

// // Inserting into database
// db.query(
//   `INSERT INTO department (name) VALUES (?,?)`,
//   [ res.name],
//   (err, data) => {
//     console.log("Added department!");
//     menu();
//   }
// );

// db.query(
//   `INSERT INTO role (id,title,salary,departmentid) VALUES (?,?,?,?)`,
//   [res.id, res.title, res.salary, res.departmentid],
//   (err, data) => {
//     console.log("Added role!");
//     menu();
//   }
// );

// db.query(
//   `INSERT INTO employee (id,title,salary,departmentid) VALUES (?,?,?,?)`,
//   [res.id, res.first, res.last, res.departmentid],
//   (err, data) => {
//     console.log("Added role!");
//     menu();
//   }
// );

// //showing individual databases
// db.query ('SELECT * FROM department', function (err,results) {
//     console.log(results);
// })
// db.query ('SELECT * FROM role', function (err,results) {
//     console.log(results);
// })
// db.query ('SELECT * FROM employee', function (err,results) {
//     console.log(results);
// })

// //show all datbases
// db.query ('SHOW TABLES', function (err,results) {
//     console.log(results)
// })
