const commandExistsSync = require('command-exists').sync;
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
                }
            },
            {
                name: 'sfVersion',
                type: 'list',
                message: 'Symfony version',
                choices: ['5.1', '5.0', '4.4']
            },
            {
                name: 'configChoice',
                type: 'list',
                message: 'How would you like to choose your packages?',
                choices: [
                    {name: 'Customized', value: 'custom'},
                    {name: 'website/skeleton (traditional web application)', value: 'website/skeleton', short: 'website/skeleton'}
                ]
            },
            {
                name: 'components',
                type: 'checkbox',
                message: 'Components that you want to install',
                choices: components,
                pageSize: 12,
                when: function (answers) {
                    return module.exports.isCustomConfig(answers);
                },
            },
            {
                name: 'devComponents',
                type: 'checkbox',
                message: 'Components (dev) that you want to install',
                choices: devComponents,
                when: function (answers) {
                    return module.exports.isCustomConfig(answers);
                },
            }
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
