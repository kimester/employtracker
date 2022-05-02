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


const pick = ()=> {
    inquirer.prompt
    {
        type:'list',
        message:'What would you like to do?',
        name:'input',
        choices: ["add Department", "add Role"]
    },
}

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


        db.query(`INSERT INTO department (id,name) VALUES (?,?)`,[res.id, res.name], (err,data) => {
           console.log('Added department!');
            menu();
        })
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


        db.query(`INSERT INTO department (id,title,salary,departmentid) VALUES (?,?)`,[res.id, res.title, res.salary, res.departmentid], (err,data) => {
           console.log('Added role!');
            menu();
        })
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
            message:'department_id',
            name:'departmentid'
        }


        db.query(`INSERT INTO department (id,title,salary,departmentid) VALUES (?,?)`,[res.id, res.title, res.salary, res.departmentid], (err,data) => {
           console.log('Added role!');
            menu();
        })
    ])
}