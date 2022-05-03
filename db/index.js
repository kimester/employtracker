const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findDepartments(){
      return this.connection.promise().query('SELECT * FROM department;');
  }

  findRoles(){
    return this.connection.promise().query('SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;');
}
}

module.exports = new DB(connection);
