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
};

module.exports = {
    hasCommand: (command) => {
        return commandExistsSync(command);
    },
    checkNeededCommands: () => {
        for (let command in commands) {
            if(!module.exports.hasCommand(command)) {
                console.log(`${commands[command].title} must be installed: ${commands[command].url}`)
                missingCommands = true;
            }
        }

        if(missingCommands) process.exit();
    },
    hasGit: () => {
        return module.exports.hasCommand('git');
    },
    hasSymfony: () => {
        return module.exports.hasCommand('symfony');
    },
};
