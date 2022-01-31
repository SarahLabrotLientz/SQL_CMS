INSERT INTO departments (dept_name) 
 VALUES ('Marketing'),
        ('Customer Support'),
        ('Sales'),
        ('Product Development');
        


INSERT INTO roles (title, salary, department_id) 
 VALUES ('Sales Manager', 300000, 3),
        ('Accountant', 100000, 4),
        ('Office Manager', 200000, 2),
        ('Marketing Manager', 180000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id) 
 VALUES ('David','Bowie',  1, NULL),
        ('Eric', 'Clapton', 4, 1),
        ('Gene', 'Wilder', 2, NULL),
        ('Susy', 'Que', 1, 3);     








