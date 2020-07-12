const commandExistsSync = require('command-exists').sync;
const { execSync } = require('child_process');

module.exports = {
    init: (config) => {
        config.configChoice === 'website/skeleton' ? module.exports.useWebsiteSkeleton(config) : module.exports.useCustomConfig(config);
        module.exports.initGitRepo(config);
    },
    useWebsiteSkeleton: (config) => {
        execSync(`symfony new ${config.title} --version=${config.sfVersion} --full --no-git`);
    },
    useCustomConfig: (config) => {
        execSync(`symfony new ${config.title} --version=${config.sfVersion} --no-git`);

        if (config.components.length) {
            const items = config.components.join(' ');
            execSync(`cd ${config.title} && symfony composer req ${items}`);
        }
        if (config.devComponents.length) {
            const items = config.devComponents.join(' ');
            execSync(`cd ${config.title} && symfony composer req ${items} --dev`);
        }
    },
    initGitRepo: (config) => {
        if(commandExistsSync('git') && config.initGit) {
            execSync(`cd ${config.title} && git init`);
        }
    }
};
