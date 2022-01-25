/* To create database run the scripts in this file */
DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE departments (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);



CREATE TABLE roles (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(10.3) NULL,
department_id INT NULL,
PRIMARY KEY(id),
FOREIGN KEY(department_id) REFERENCES departments(id)
);



CREATE TABLE employees (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY(manager_id) REFERENCES employees(id) ON DELETE SET NULL,
FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE SET NULL
); 