const { execSync } = require('child_process');

module.exports = {
    init: (config) => {
        let git = config.initGit ? '' : '--no-git';

        execSync(`symfony new ${config.title} --version=${config.sfVersion} ${git}`);

        if (config.components.length) {
            const items = config.components.join(' ');
            execSync(`cd ${config.title} && symfony composer req ${items}`);
        }
        if (config.devComponents.length) {
            const items = config.devComponents.join(' ');
            execSync(`cd ${config.title} && symfony composer req ${items} --dev`);
        }

        console.log(`Project ready ! in ./${config.title}`);
    }
};
