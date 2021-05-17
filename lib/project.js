const { execSync } = require('child_process');
const commands  = require('./commands');

module.exports = {
    init: (config) => {
        config.configChoice === 'website/skeleton' ? module.exports.useWebsiteSkeleton(config) : module.exports.useCustomConfig(config);
        module.exports.initGitRepo(config);
    },
    useWebsiteSkeleton: (config) => {
        if(commands.hasSymfony()){
            execSync(`symfony new ${config.title} --version=${config.sfVersion} --full --no-git`);
        } else {
            execSync(`composer create-project symfony/website-skeleton ${config.title} ^${config.sfVersion}.*`);
        }
    },
    useCustomConfig: (config) => {
        let sf = '';
        if(commands.hasSymfony()){
            execSync(`symfony new ${config.title} --version=${config.sfVersion} --no-git`);
            sf = 'symfony';
        } else {
            execSync(`composer create-project symfony/skeleton ${config.title} ^${config.sfVersion}.*`);
        }

        if (config.components.length) {
            module.exports.installLibs(config, sf, config.components.join(' '));
        }

        if (config.devComponents.length) {
            module.exports.installDevLibs(config, sf, config.devComponents.join(' '));
        }
    },
    projectCommand: (config, command) => {
        execSync(`cd ${config.title} && ${command}`)
    },
    initGitRepo: (config) => {
        if(commands.hasGit() && config.initGit) {
            module.exports.projectCommand(config, `git init`);
        }
    },
    installLibs: (config, sf, items) => {
        module.exports.projectCommand(config, `${sf} composer req ${items}`);
    },
    installDevLibs: (config, sf, items) => {
        module.exports.projectCommand(config, `${sf} composer req ${items} --dev`);
    },
};
