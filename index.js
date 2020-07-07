#! /usr/bin/env node
"use strict";

const commands = require('./lib/commands');
const inquirer = require('./lib/inquirer');
const project = require('./lib/project');

commands.checkNeededCommands();

const run = async () => {
    const config = await inquirer.askProjectDetails();
    project.init(config);
};

run();
