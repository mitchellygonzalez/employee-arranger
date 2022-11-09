# employee-arranger

#### Github link:  https://github.com/mitchellygonzalez/employee-arranger

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Technology Used](#technology-used)
* [Questions](#questions)
 
## Description
Employee-Arranger is an application that allows you to keep track of all of your employees based on their departments and roles. You can add their personal information such as first name, last name, title, salary, and link their manager to their contact. This is a convenient application that alows non-developers to easily view and interact with information stored in a database. This type of interface is called content management systems (CMS). You'll be able to view your departments, roles, and employees. You'll also be able to add a department, role and employee, as well as edit employee information. 

screencastify video link: https://watch.screencastify.com/v/4w6a491JYyJCHWLNAvia

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business


## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation
1. Clone this code onto a local repository.
2. Install MySQL
3. Create an account and save your credentials
4. Ideal to run mySQL on one server and node on a second server to start your application

## Usage
1. Install Inquirer by running npm i inquirer@8.2.4 (please use this version)
2. Download MySQL. Here is the link to their website: https://www.mysql.com/
3. Install Node MySQL 2 through the command line by running: npm install --save mysql2
4. Get MySQL started by running the following: mysql -u root -p
5. Enter your credentials into the terminal after the comment from above
6. Run the following to start your application: npm start


## Contributors
To contribute, you may clone this repo, and create a new branch to add your code. 

## Technology Used
- Inquirer
- Node.js
- MySQL
- MySQL2
- JS
- JSON

## Questions
Any questions, contact me via email: abc123@gmail.com

