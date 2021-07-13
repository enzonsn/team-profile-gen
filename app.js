const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const teamArr = [];

const setManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: nameInput => {
                if(nameInput){return true;}
                else{console.log("Please enter the manager's name!"); return false;}
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(valid){return true;}
                else{console.log("Please enter the manager's email!"); return false;}
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: nameInput => {
                if(isNaN(nameInput)){console.log("Please enter the manager's ID!"); return false;}
                else{return true;}
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if(isNaN(officeInput)){console.log("Please enter the manager's office Number!"); return false;}
                else{return true;}
            }
        }
    ])
    .then(managerInput => {

        const {name, email, id, office} = managerInput;
        const manager = new Manager (name, email, id, office);
        teamArr.push(manager);
        console.log(manager);

    });

};

const addEmployees = () =>{

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee",
            validate: nameInput => {
                if(nameInput){return true;}
                else{console.log("Please enter a name for the employee!"); return false;}
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is employee's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(valid){return true;}
                else{console.log("Please enter the employee's email!"); return false;}
            }
        },
        {  
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: nameInput => {
                if(isNaN(nameInput)){console.log("Please enter the employee's ID!"); return false;}
                else{return true;}
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What's the engineer's Github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if(nameInput){return true;}
                else{console.log("Please enter eengineer's Github username!"); return false;}
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What's the interns's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if(nameInput){return true;}
                else{console.log("Please enter intern's school!"); return false;}
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would  you like to add more teammates?',
            default: false
        }
        
    ])

    .then(employeeData => {
        let {name, email, id, role, github, school, confirmAddEmployee} = employeeData;
        let employee;
        if(role === "Engineer"){ employee = new Engineer (name, id, email, github); console.log(employee);}
        else if(role === "Intern"){ employee = new Intern (name, email, id, school); console.log(employee);}
        teamArr.push(employee);
        if(confirmAddEmployee){return addEmployees(teamArr);}else{return teamArr;}
    });


};




const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err =>{
        if(err){console.log(err); return;}
        else{console.log("Your team profile has been generated! Take a look in the index.html");}
    });
};

setManager()
    .then(addEmployees)
    .then(teamArr =>{return generateHTML(teamArr);})
    .then(pageHTML => {return writeFile(pageHTML);})
    .catch(err =>{console.log(err);});