const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateMarkdown = require('./src/generateMarkdown');
const team = [];

const promptMan = () => { 
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'Enter your name',
            name: 'name',
            },
            {
            type: 'input',
            message: 'Enter your ID number',
            name: 'id',
            },
            {
            type: 'input',
            message: 'Enter your email address',
            name: 'email',
            },
            {
            type: 'input',
            message: 'Enter your office number',
            name: 'officeNumber',
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            promptList();
        })
};

const promptEng = () => { 
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'Enter your name',
            name: 'name',
            },
            {
            type: 'input',
            message: 'Enter your ID number',
            name: 'id',
            },
            {
            type: 'input',
            message: 'Enter your email address',
            name: 'email',
            },
            {
            type: 'input',
            message: 'Enter your github username',
            name: 'github',
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            promptList();
        })
};

const promptIntern = () => { 
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'Enter your name',
            name: 'name',
            },
            {
            type: 'input',
            message: 'Enter your ID number',
            name: 'id',
            },
            {
            type: 'input',
            message: 'Enter your email address',
            name: 'email',
            },
            {
            type: 'input',
            message: 'Enter your school',
            name: 'school',
            },
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            promptList();
        })
};

const promptList = () => {
    inquirer   
        .prompt([
            {
                type: 'list',
                message: 'What would you like to add next?',
                name: 'options',
                choices: ['Add a manager', 'Add an engineer', 'Add an intern', 'Finish']
            }
        ])
        .then(userChoice => {
            switch (userChoice.options) {
                case 'Add a manager':
                    promptMan();
                    break;
                case 'Add an engineer':
                    promptEng();
                    break;
                case 'Add an intern':
                    promptIntern();
                    break;
                case 'Finish':
                    promptFinish();
                    break;
            }
        })
};

const promptFinish = () => {
    fs.writeFileSync('index.html', generateMarkdown(team), 'utf-8')
};

promptList();