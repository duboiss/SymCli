const commandExistsSync = require('command-exists').sync;
const inquirer = require('inquirer');
const constants = require('./constants');

const gitInput = {
    name: 'initGit',
    type: 'confirm',
    message: 'Initialize a git repository?',
};

module.exports = {
    askProjectDetails: () => {
        let questions = [
            {
                name: 'title',
                type: 'input',
                message: 'Project title:',
                validate: function(value) {
                    if (!value.length) {
                        return 'Please enter a name for your project.';
                    } else if(value.trim().includes(" ")) {
                        return 'Please enter a name without spaces.';
                    }
                    return true;
                },
            },
            {
                name: 'sfVersion',
                type: 'list',
                message: 'Symfony version',
                choices: ['5.2', '5.1', '4.4'],
            },
            {
                name: 'configChoice',
                type: 'list',
                message: 'How would you like to choose your packages?',
                choices: [
                    {name: 'Customized', value: 'custom'},
                    {name: 'website/skeleton (traditional web application)', value: 'website/skeleton', short: 'website/skeleton'}
                ],
            },
            {
                name: 'components',
                type: 'checkbox',
                message: 'Components that you want to install:',
                choices: constants.components,
                pageSize: 12,
                when: function (answers) {
                    return module.exports.isCustomConfig(answers);
                },
            },
            {
                name: 'devComponents',
                type: 'checkbox',
                message: 'Components (dev) that you want to install:',
                choices: constants.devComponents,
                when: function (answers) {
                    return module.exports.isCustomConfig(answers);
                },
            },
        ];
        if(commandExistsSync('git')) {
            questions.push(gitInput);
        }
        return inquirer.prompt(questions);
    },
    isCustomConfig: (answers) => {
        return answers.configChoice === "custom";
    }
};
