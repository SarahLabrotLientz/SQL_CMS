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
}
//work with tutor ends
    

    
