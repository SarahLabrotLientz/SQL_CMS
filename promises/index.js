const db = require("./connection")



//ts
module.exports = {
    
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
    
    createEmployee: (first_name, last_name, role_id, manager_id ) => {
        return db.promise().query(
            (`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}','${role_id}', '${manager_id}')`)
        )
        
    },

    updateEmployeeRole: (employee_id, role_id) => {
        return db.promise().query(
            `UPDATE employees SET role_id = ${role_id} WHERE id = ${employee_id}`
        )
    },


    
    findAllRoles: () => {
        return db.promise().query(
            ("SELECT * FROM roles")
        )
    },

    findRolesByDepartment: () => {
        return db.promise().query(
            ("Select * FROM roles, departments")
        )
        
    },

    findAllDepartments: () => {
        return db.promise().query(
            ("Select * from departments")
        )
    },

  

    createDepartment: () => {
        return db.promise().query(
            ("Insert into departments (name) values(${name}")
        )
        
    },


    

}

    

    
