const mysql = require('mysql2')
const inquirer = require("inquirer")

//connect to database 
const db = mysql.createConnection(
   {
       host: 'local host',
       user: 'root',
       password: 'password',
       database: 'employee_db'
   },
      
    console.log('Connect to employee_db database.')
);


const pick = [

    {
        type:'list',
        name:'input',
        message:'What would you like to do?',
        choices: ["view all departments", "view all roles", "view all employees", "add a department","add a role","add and employee","update an employee"]
    },
];

const addDepartment = () => {
    inquirer.prompt ([
        {
            type:'input',
            message:'id',
            name:'id'
        },
        {
            type:'input',
            message:'Department name',
            name:'name'
        }

    ])
}
const addRole = () => {
    inquirer.prompt ([
        {
            type:'input',
            message:'id',
            name:'id'
        },
        {
            type:'input',
            message:'title',
            name:'title'
        },
        {
            type:'input',
            message:'salary',
            name:'salary'
        },
        {
            type:'input',
            message:'department_id',
            name:'departmentid'
        }


       
    ])
}
const addEmployee = () => {
    inquirer.prompt ([
        {
            type:'input',
            message:'id',
            name:'id'
        },
        {
            type:'input',
            message:'What is your first name',
            name:'first'
        },
        {
            type:'input',
            message:'What is your last name',
            name:'last'
        },
        {
            type:'input',
            message:'manager_id',
            name:'managerid'
        }

    ])
}