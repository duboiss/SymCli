const commandExistsSync = require('command-exists').sync;

let missingCommands = false;

const commands = {
    'php': {
        title: 'PHP',
        url: 'https://www.php.net/downloads.php'
    },
    'composer': {
        title: 'Composer',
        url: 'https://getcomposer.org/download/'
    },
    'git': {
        title: 'Git',
        url: 'https://git-scm.com/downloads'
    },
    'symfony': {
        title: 'Symfony binary',
        url: 'https://symfony.com/download'
    }
};

module.exports = {
    checkNeededCommands: () => {
        for (let command in commands) {
            if(!commandExistsSync(command)) {
                console.log(`${commands[command].title} must be installed: ${commands[command].url}`)
                missingCommands = true;
            }
        }

        if(missingCommands) process.exit();
    },
};
