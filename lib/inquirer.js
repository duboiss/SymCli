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
    "process",
    "orm-pack",
    "security",
    "serializer-pack",
    "stopwatch",
    "string",
    "translation",
    "twig-pack",
    "validator",
    "web-link",
    "webpack-encore",
    "workflow",
];

const devComponents = [
    "debug-pack",
    "phpunit-bridge",
    "profiler-pack",
    "test-pack",
];

const bundles = [
    {
        name: 'api-platform/api-pack',
        value: ['api-platform/api-pack', false],
        short: 'api-pack'
    },
    {
        name: 'doctrine/doctrine-fixtures-bundle',
        value: ['doctrine/doctrine-fixtures-bundle', true],
        short: 'doctrine-fixtures'
    },
    {
        name: 'easycorp/easyadmin-bundle',
        value: ['easycorp/easyadmin-bundle', false],
        short: 'easyadmin'
    },
    {
        name: 'friendsofsymfony/jsrouting-bundle',
        value: ['friendsofsymfony/jsrouting-bundle', false],
        short: 'jsrouting'
    },
    {
        name: 'knplabs/doctrine-behaviors',
        value: ['knplabs/doctrine-behaviors', false],
        short: 'doctrine-behaviors'
    },
    {
        name: 'lexik/jwt-authentication-bundle',
        value: ['lexik/jwt-authentication-bundle', false],
        short: 'lexik/jwt-authentication'
    },
    {
        name: 'stof/doctrine-extensions-bundle',
        value: ['stof/doctrine-extensions-bundle', false],
        short: 'stof/doctrine-extensions'
    },
    {
        name: 'symfony/apache-pack',
        value: ['symfony/apache-pack', false],
        short: 'apache-pack'
    },
    {
        name: 'symfony/maker-bundle',
        value: ['symfony/maker-bundle', true],
        short: 'maker-bundle'
    },
    {
        name: 'symfony/monolog-bundle',
        value: ['symfony/monolog-bundle', false],
        short: 'monolog'
    },
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
                },
            },
            {
                name: 'sfVersion',
                type: 'list',
                message: 'Symfony version',
                choices: ['5.1', '5.0', '4.4'],
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
            },
            {
                name: 'bundles',
                type: 'checkbox',
                message: 'Bundles that you want to install',
                choices: bundles,
                pageSize: 10
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
