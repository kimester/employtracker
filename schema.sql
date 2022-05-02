DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR,
    salary DECIMAL,
    department_id
);

CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT

);

DESCRIBE department;
DESCRIBE role;
DESCRIBE employee;

