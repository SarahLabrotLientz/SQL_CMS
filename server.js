//all dependancies---met with a tutor and he said not to use console.table as it isn't nessary to execute the table, i also asked my instructor Sujil about this and he said the same thing. 
const cFonts = require("cfonts");
const inquirer = require("inquirer");
const db = require('./promises');
// const emp = require('./promises/employee');

function init() {
    cFonts.say("Employee|Database", {
        font: "block", // define the font face
        align: "left", // define text alignment
        colors: ["yellow"], // define all colors
        background: "transparent", // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1, // define letter spacing
        lineHeight: 1, // define the line height
        space: true, // define if the output text should have empty lines on top and on the bottom
        maxLength: "0", // define how many character can be on one line
        gradient: false, // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false, // define if this is a transition between colors directly
        env: "node" // define the environment CFonts is being executed in
    });

    main()
}
  
init()
//function to display cms options in console with inquirer 
function displayOptions() {
    return inquirer.prompt({
        name: "choice",
        type: "rawlist",
        message: "What would you like to do?",
        loop: false,
        choices: [
            "View All Employees",
            "View All Employees By Role",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "View Roles By Department",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
        ]
    })
}

//function for table of contents
async function main() {
    let option = await displayOptions();

    switch (option.choice) {
        case "View All Employees":
            getAllEmployees();
            break;

        case "View All Employees By Role":
            employeesByRole();
            break;

        case "Add Employee":
            addEmployee();
            break;

        case "Update Employee Role":
            updateRole();
            break;

        case "View All Roles":
            viewRoles()
            break;

        case "View Roles By Department":
            rolesByDepartment();
            break;

        case "Add Role":
            addRole();
            break;

        case "View All Departments":
            viewDepartments();
            break;
       
       
        case "Add Department":
            addDepartment();
            break;
        
        
        case "Quit":
            endApp();
            break;
        default:
            endApp();
            break;
    }
}

// Create function to view all employees

function getAllEmployees () {
    db.findAllEmployees()
    .then(([rows]) => {
        console.log('\n')
        console.table(rows)
        main();
    })
}


//Create function to view employees by role

function employeesByRole() {
    db.findByRole()
    .then(([rows]) => {
        console.log('\n')
        console.table(rows)
        main()
    }) 
}

//Create function to add an employee
function addEmployee() {
    console.log("You are now ADDING an Employee");
    inquirer.prompt([
        {
                type: "input",
                name: "first_name",
                message: "Enter the new employee's first name",
                validate: (first_name) => {
                  if (first_name) {
                    return true;
                  } else {
                    console.log("Must enter First Name");
                    return false;
                  }
                },
              },
        {
                type: "input",
                name: "last_name",
                message: "Enter the new employee's last name",
                validate: (last_name) => {
                  if (last_name) {
                    return true;
                  } else {
                    console.log("Must enter First Name");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "role_id",
                message: "Enter the new employee's Role ID Number (1-4) ",
                validate: (role_id) => {
                  if (isNaN(role_id)) {
                    console.log("Please enter a number between (1-4) for the Role's ID!");
                    return false;
                  } else if (!role_id) {
                    console.log("Please enter a number between (1-4) for the Role's ID!");
                    return false;
                  } else {
                    return true;
                  }
                },
              },
              {
                type: "input",
                name: "manager_id",
                message: "Enter the new employee's Manager ID Number (1-4) ",
                validate: (manager_id) => {
                  if (isNaN(manager_id)) {
                    console.log(
                      "Please enter a number between 1-4 for the Manager's ID!"
                    );
                    return false;
                  } else if (!manager_id) {
                    console.log(
                      "Please enter a number between 1-4 for the Manager's ID!"
                    );
                    return false;
                  } else {
                    return true;
                  }
                },
              },
      
            ]).then(async (empObj) => {
                // console.log(empObj)
       let packet = await db.createEmployee(empObj.first_name, empObj.last_name, empObj.role_id, empObj.manager_id);
    //    console.log(packet)
    }).then(() =>{
        main();   
    })
}

//Update Employee Role 
function updateRole() {
    console.log("updating")
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows ;
            const empNewObj = employees.map(({id, first_name}) => ({
                name: first_name,
                value: id
            }))
            inquirer.prompt([
                {
                    type: "list",
                    name: "employee_id",
                    message: "Which employee is in need of updating",
                    choices:empNewObj
                }
                ]).then(({employee_id}) => {
                    db.findAllRoles()
                        .then(([rows]) => {
                            let roles = rows ;
                            const roleNewObj = roles.map(({id, title}) => ({
                                name: title,
                                value: id
                            }))

                            inquirer.prompt([
                                {
                                    type: "list",
                                    name: "role_id",
                                    message: "Which role would you like for the employee",
                                    choices: roleNewObj
                                }
                            ]).then(({role_id}) => {
                                return db.updateEmployeeRole(employee_id, role_id);
                            }).then(() => {
                                main();
                            })
                        
                        })
                })
        })
}

//Create function to view all roles 
function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows 
        console.log('\n')
        console.table(roles)
        main()
    })
}

//View roles by department
function rolesByDepartment() {
    db.findRolesByDepartment()
    .then(([rows]) => {
        console.log('\n')
        console.table(rows)
        main()
    }) 
}


// Create function to add a role
function addRole() {
    console.log("You are now ADDING a Role");
    inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "Enter new Job Title",
          validate: (title) => {
            if (title) {
              return true;
            } else {
              console.log("Must enter a Title");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "salary",
          message: "Enter the salary",
          validate: (salary) => {
            if (isNaN(salary)) {
              console.log("Please enter a number for the salary");
              return false;
            } else if (!salary) {
              console.log("Please enter a number for the salary");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "department_id",
          message: "Enter the ID# (1-4) of the new Job's Department",
          validate: (department_id) => {
            if (isNaN(department_id)) {
              console.log("Please enter a number between (1-4) for the Role's ID!");
              return false;
            } else if (!department_id) {
              console.log("Please enter a number between (1-4) for the Role's ID!");
              return false;
            } else {
              return true;
            }
          },
        },
    ]).then(({ title, salary, department_id }) => {
    db.createRole(title, salary, department_id) 
    }).then(() => {
        main();
    })
}



//View All Departments
function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            console.log('\n')
            console.table(rows)
            main();
        })
}


//Add a Department 

    function addDepartment() {
        console.log("You are now adding a department");
        inquirer.prompt([
        {
        
                type: "input",
                name: "dept_name",
                message: "Enter the new departments name",
                validate: (dept_name) => {
                  if (dept_name) {
                    return true;
                  } else {
                    console.log("Must enter department name");
                    return false;
                  }
                },
              },

            ]).then(({dept_name}) => {
                 db.createDepartment(dept_name)
                }).then(() => {
                    main();
   
         
    })
}






           


    