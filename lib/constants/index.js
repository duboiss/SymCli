exports.bundles = [
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
        name: 'knplabs/doctrine-behaviors (need orm)',
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

exports.components = [
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

exports.devComponents = [
    "debug-pack",
    "phpunit-bridge",
    "profiler-pack",
    "test-pack",
];
