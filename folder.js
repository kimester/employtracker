
const addDepartment = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "id",
          name: "id",
        },
        {
          type: "input",
          message: "Department name",
          name: "name",
        },
      ])
      .then((res) => {
        db.query(
          `INSERT INTO department (name) VALUES (?,?)`,
          [res.name],
          (err, data) => {
            console.log("Added department!");
            menu();
          }
        );
      });
  };
  
  const addRole = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "id",
          name: "id",
        },
        {
          type: "input",
          message: "title",
          name: "title",
        },
        {
          type: "input",
          message: "salary",
          name: "salary",
        },
        {
          type: "input",
          message: "department_id",
          name: "departmentid",
        },
      ])
      .then((res) => {
        db.query(
          `INSERT INTO role (id,title,salary,departmentid) VALUES (?,?,?,?)`,
          [res.id, res.title, res.salary, res.departmentid],
          (err, data) => {
            console.log("Added role!");
            menu();
          }
        );
      });
  };
  
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "id",
          name: "id",
        },
        {
          type: "input",
          message: "What is your first name",
          name: "first",
        },
        {
          type: "input",
          message: "What is your last name",
          name: "last",
        },
        {
          type: "input",
          message: "manager_id",
          name: "managerid",
        },
      ])
      .then((res) => {
        db.query(
          `INSERT INTO employee (id,title,salary,departmentid) VALUES (?,?,?,?)`,
          [res.id, res.first, res.last, res.departmentid],
          (err, data) => {
            console.log("Added empolyee!");
            menu();
          }
        );
      });
  };