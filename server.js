const inquirer = require("inquirer");
require("console.table");
const db = require("./db");
const mysql = require('mysql2');

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
          "add department",
          "add roles",
          "add employee",
          "update employee role",
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
          viewAllRoles();
          break;
        case "view all employees":
        viewAllEmployees();
          break;
        case "add department":
         addDepartment();
          break;
        case "add roles":
          addRoles();
          break;
        case "add employee":
         addEmployee();
          break;
        case "update employee":
         updateRoles();
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


// add employee
function addEmployee() {
  inquirer.prompt([
      {
          type: "input",
          name: "firstName",
          message: "enter employee first name"
      },
      {
          type:"input",
          name:"lastName",
          message:"enter employee last name"
      },
      {
          type:"number",
          name: "roleId",
          prompt: "enter role ID"
      },
      {
          type:"number",
          name: "managerId",
          prompt: "enter manager ID"
      }
  ]).then((res) => {
      db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [res.firstName, res.lastName, res.roleId, res.managerId],(err, data) => {
          if (err) throw err;
          console.table(data);
          prompts();
      })
  })
}

// add department
function addDepartment() {
  inquirer.prompt([
      {
          type:"input",
          name:"department",
          message:"enter department name"
      }
  ]).then((res) => {
      db.query("INSERT INTO department (department_name) VALUES (?)", [res.department],(err, data) => {
          if (err) throw err;
          console.table(data);
          prompts();
      })
  })
}

// add role
function addRoles() {
  inquirer.prompt([
      {
          type:"input",
          name:"title",
          message:"enter role title"
      },
      {
          type:"number",
          name:"salary",
          message:"enter salary"
      },
      {
          type:"number",
          name:"departmentId",
          message:"enter department ID"
      }
  ]).then((res) => {
      db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [res.title, res.salary, res.departmentId],(err, data) => {
          if (err) throw err;
          console.table(data);
          prompts();
      })
  })
}

// update employee role
function updateRoles() {
  inquirer.prompt([
      {
          type:"number",
          name:"employeeId",
          message:"enter employee ID of the employee who's role you want to change"
      },
      {
          type:"number",
          name:"roleId",
          message:"enter the ID of the new role"
      }
  ]).then((res) => {
      db.query("UPDATE employee SET role_id = ? WHERE id = ?", [res.roleId, res.employeeId],(err, data) => {
          if (err) throw err;
          console.table(data);
          prompts();
      })
  })
}

start();

