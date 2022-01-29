const db = require("./connection")



//ts
module.exports = {
    findAllDepartments: () => {
        return db.promise().query(
            "Select * from departments"
        )
    },

    findAllRoles: () => {
        return db.promise().query(
            "SELECT * FROM roles"
        )
    },
    //te

    findAllEmployees: () => {
        return db.promise().query(
            ("Select * FROM employees")
        )
        
    },

    findByRole: () => {
        return db.promise().query(
            ("Select * FROM employees, roles")
        )
        
    },

    findRolesByDepartment: () => {
        return db.promise().query(
            ("Select * FROM roles, departments")
        )
        
    },
//ask sujil about adding to a department 

    createDepartment: () => {
        return db.promise().query(
            ("Insert into departments (name) values(${name}")
        )
        
    },


    createEmployee: () => {
        return db.promise().query(
            ("Insert into employees (name) values(${name}")
        )
        
    },

    updateEmployeeRole: () => {
        return db.promise().query(
            ("SELECT employees.first_name, employees.last_name, roles.title FROM employees, roles WHERE employees.role_id = roles.id")
        )
        
    },
}

    

    
