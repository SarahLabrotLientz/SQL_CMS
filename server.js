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
        case "View All Roles":
            viewRoles()
            break;
        case "View All Departments":
            viewDepartments();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Add Role":
            addRole(await dept.getAllDepartments());
            break;
            //ask sujil about adding to a department
        case "Add Department":
            addDepartment();
            break;
        case "Update Employee Role":
            changeRole(await rol.getAllRoles(), await db.getAllEmployees());
            break;
        case "View Roles By Department":
            rolesByDepartment();
            break;
        case "View All Employees By Role":
            employeesByRole();
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

//tutor help starts

function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            console.log('\n')
            console.table(rows)
            main();
        })
}

function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows 
        console.log('\n')
        console.table(roles)
        main()
    })
}
///tutor help ends

function employeesByRole() {
    db.findByRole()
    .then(([rows]) => {
        console.log('\n')
        console.table(rows)
        main()
    }) 
}


    function rolesByDepartment() {
        db.findRolesByDepartment()
        .then(([rows]) => {
            console.log('\n')
            console.table(rows)
            main()
        }) 
    }
    //Add department ---Ask sujil about 
    function addDepartment() {
        db.addDep()
        .then(([rows]) => {
            console.log('\n')
            console.table(rows)
            main()
        }) 
    }

    //or 

    function addDepartment() {
        inquirer.prompt({
            message: "Enter Department Name",
            type: "input",
            name: "department"
        }).then(choice => {
            db.createDepartment(choice.department);
            main();
        })
    }