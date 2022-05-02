// Inserting into database
db.query(
  `INSERT INTO department (id,name) VALUES (?,?)`,
  [res.id, res.name],
  (err, data) => {
    console.log("Added department!");
    menu();
  }
);

db.query(
  `INSERT INTO role (id,title,salary,departmentid) VALUES (?,?,?,?)`,
  [res.id, res.title, res.salary, res.departmentid],
  (err, data) => {
    console.log("Added role!");
    menu();
  }
);

db.query(
  `INSERT INTO employee (id,title,salary,departmentid) VALUES (?,?,?,?)`,
  [res.id, res.first, res.last, res.departmentid],
  (err, data) => {
    console.log("Added role!");
    menu();
  }
);

//showing databases
db.query ('SELECT * FROM department', function (err,results) {
    console.log(results);
})
db.query ('SELECT * FROM role', function (err,results) {
    console.log(results);
})
db.query ('SELECT * FROM employee', function (err,results) {
    console.log(results);
})
