const inquirer = require('inquirer');

module.exports = {
    askProjectDetails: () => {
        const questions = [
            {
                name: 'title',
                type: 'input',
                message: 'Project title:',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a name for your project.';
                    }
                }
            },
            {
                name: 'sfVersion',
                type: 'list',
                message: 'Symfony version',
                choices: ["5.1", "5.0", "4.4", "3.4"]
            },
            {
                name: 'initGit',
                type: 'confirm',
                message: 'Initialize a git repository?',
            }
        ];
        return inquirer.prompt(questions);
    },
};
