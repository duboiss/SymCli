const inquirer = require('inquirer');

const components = [
    "asset",
    "event-dispatcher",
    "expression-language",
    "filesystem",
    "form",
    "http-client",
    "http-foundation",
    "intl",
    "mailer",
    "mercure",
    "messenger",
    "orm-pack",
    "security",
    "serializer",
    "string",
    "translation",
    "twig-pack",
    "validator",
    "webpack-encore",
    "workflow"
];

const devComponents = [
    "debug-pack",
    "phpunit-bridge",
    "profiler-pack",
    "test-pack",
];

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
            },
            {
                name: 'components',
                type: 'checkbox',
                message: 'Components that you want to install',
                choices: components,
                pageSize: 12
            },
            {
                name: 'devComponents',
                type: 'checkbox',
                message: 'Components (dev) that you want to install',
                choices: devComponents
            }
        ];
        return inquirer.prompt(questions);
    },
};
