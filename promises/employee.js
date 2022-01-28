// // get the client

// const util = require("util");

// // Create the connection pool. The pool-specific settings are the defaults
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'test',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });
// const promiseQuery = util.promisify(connection.query).bind(connection);

// connection.connect();
// const createEmployee = (first, last, roleId, managerId) => {
//     if (managerId == undefined) {
//         console.log("no manager provided");
//         managerId = null;
//     }

//     promiseQuery(`INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES("${first}","${last}",${roleId},${managerId});`).then(results => {
//         console.log("employees created");
//     })
// }

// const getEmployee = empId => {
//     let results = promiseQuery(`SELECT * FROM employees WHERE id = ${empId}`);
//     return results;
// }

// const getAllEmployees = () => {
//     let results = promiseQuery(`SELECT * FROM employees`);
//     return results;
// }

// const changeRole = (id, roleId) => {
//     promiseQuery("UPDATE employees SET role_id=? WHERE id=?", [roleId, id]);
// }

// const employeesByRole = () => {
//     return promiseQuery(`SELECT employees.first_name, employees.last_name, roles.title FROM employees, roles WHERE employees.role_id = roles.id`);
// }

// const endConnection = () => {
//     connection.end();
// }

// module.exports =
// {
//     getAllEmployees: getAllEmployees,
//     getEmployee: getEmployee,
//     createEmployee: createEmployee,
//     endConnection: endConnection,
//     changeRole: changeRole,
//     employeesByRole: employeesByRole
// }
