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
            sf = ' symfony';
        } else {
            execSync(`composer create-project symfony/skeleton ${config.title} ^${config.sfVersion}.*`);
        }

        if (config.components.length) {
            const items = config.components.join(' ');
            execSync(`cd ${config.title} &&${sf} composer req ${items}`);
        }
        if (config.devComponents.length) {
            const items = config.devComponents.join(' ');
            execSync(`cd ${config.title} &&${sf} composer req ${items} --dev`);
        }
    },
    initGitRepo: (config) => {
        if(commands.hasGit() && config.initGit) {
            execSync(`cd ${config.title} && git init`);
        }
    }
};
