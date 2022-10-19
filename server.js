const inquirer = require("inquirer");
const mysql = require("mysql2");
const staff = require("console.table");

// try removing semicolons after and also check if it works


// Connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'staff'
  },
  console.log('Connected to the staff database.')
  );
connection.connect(function (err) {
    if (err) throw err;
    console.log("... and SQL is now connected");
    menu();
  });
  
  //Start menu of the application
  function menu() {
      inquirer.prompt ({
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['View all departments', 
                  'View all roles', 
                  'View all employees', 
                  'Add a deparment', 
                  'Add a role', 
                  'Add an employee',
                  'Update an employee',
                  'Exit']
      })
      .then(function(res) {
          switch (res.menu) {
              case 'View all departments':
                  viewDepartment();
                  break;
              case 'View all roles':
                  viewRoles();
                  break;
              case 'View all employees':
                  viewEmployees();
                  break;
              case 'Add a department':
                  promptAddDepartment();
                  break;
              case 'Add a role':
                  promptAddRole();
                  break;
              case 'Add an employee':
                  promptAddEmployee();
                  break;
              case 'Update an employee':
                  promptUpdateEmployee();
                  break;
              case 'Exit':
                  console.log('Goodbye');
                  break;
              default:
                  console.log('default'); // can change
                  process.exit();
          }
      });
  };

//View all departments
function viewDepartment() {
    connection.query("SELECT * FROM department;", function (err, res) { //should there be a ;?
    if (err) throw err;
    console.table(res);
    menu();
    });
}

//View all roles
function viewRoles() {
    connection.query("SELECT * FROM role;", function (err, res) { //should there be a ;?
    if (err) throw err;
    console.table(res);
    menu();
    });
}


//View all employees
function viewEmployees() {
    connection.query("SELECT * FROM employee;", function (err, res) { //should there be a ;?
    if (err) throw err;
    console.table(res);
    menu();
    });
}

//Add a department
function promptAddDepartment () {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'department',
            message: 'Enter the name of the department you would like to add:'
        }
    ]).then(function(res) {
        connection.query("INSERT INTO department SET ?;", {name: res.department}, function (err, res){
            if(err) throw err;
            console.log("Success! New department was added.");
            menu();
        });
    });
}

//Add a role
function promptAddRole () {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'role',
            message: 'Enter the name of the role you would like to add:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role you would like to add:'
    
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department id for this role:'
        }
    ]).then(function(res) {
        connection.query("INSERT INTO role SET ?;", {role: res.role, salary: res.salary, department_id: res.department_id}, function (err, res){
            if(err) throw err;
            console.log('Success! New role was added.');
            menu();
        });
    });
}

//Add an employee
function promptAddEmployee () {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'first_name',
            message: "Enter the new employee's first name:"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter the new employee's last name:"
    
        },
        {
            type: 'input',
            name: 'role_id',
            message: "Enter the new employee's role id:"
    
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "Enter the new employee's manager id:"
        }
    ]).then(function(res) {
        connection.query("INSERT INTO employee SET ?;", {first_name: res.first_name, last_name: res.last_name, role_id: res.role_id, manager_id: res.manager_id}, function (err, res){
            if(err) throw err;
            console.log('Success! New employee was added.');
            menu();
        });
    });
}

//Update employees
function promptUpdateEmployee() {
    inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "Enter the employee id for the employee you would like to update:"
        },
        {
          type: "input",
          name: "role_id",
          message:"Enter the new role id:"
        }
    ]).then(function(res) {
        connection.query("UPDATE employee SET ? WHERE?;", [{role_id: res.role_id}, {id: res.id}], function(err, res){
            if(err) throw err;
            console.log("Success! You have updated this employee's information.");
            menu();
        });
    });
}
  




/*
To start up MySQL, run:  mysql -u root -p 

To start node.js : node server.js

*/