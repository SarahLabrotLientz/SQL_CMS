INSERT INTO departments(name) VALUES("marketing");
INSERT INTO departments(name) VALUES("sales");
INSERT INTO departments(name) VALUES("support");

INSERT INTO roles(title, salary, department_id) VALUES("Manager", 700000.00, 1);
INSERT INTO roles(title, salary, department_id) VALUES("Intern", 200000.00, 2);
INSERT INTO roles(title, salary, department_id) VALUES("Employee", 500000.00, 3);

INSERT INTO employees (first_name, last_name, role_id) VALUES("Clapton","Eric", 3);
INSERT INTO employees (first_name, last_name, role_id) VALUES("Wilde","Olivia", 2);
INSERT INTO employees (first_name, last_name, role_id) VALUES("Bowie","David", 1);