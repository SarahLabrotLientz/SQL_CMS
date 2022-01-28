const db = require("./connection")



//work with tutor
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
    //work with tutor ends

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
}

    

    
