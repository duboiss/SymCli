const { exec } = require('child_process');

module.exports = {
    init: (config) => {
        let git = config.initGit ? '' : '--no-git';
        exec(`symfony new ${config.title} --version=${config.sfVersion} ${git}`);
    },
};
