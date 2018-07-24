#!/usr/bin/env node

const version = require('./package.json').version;

const program = require('commander');
const { prompt } = require('inquirer');
const { getCustomers, genSheet } = require('./index');

const questions = require('./lib/questions');

program
	.version(version)
	.description('A simple CLI app for scraping customers from a Shopify store');

program
	

program
	.command('get-customer')
	.alias('gc')
	.description('Get all the customers from the store.')
	.action(flag => {
		flag = flag.export ? true : false;
		prompt(questions).then(answers => getCustomers(answers, flag));
	});

program
	.command('generate-sheet')
	.alias('gs')
	.option('-f --filename <filename>', 'Give a filename for generated file', 'customers')
	.option('-e --extension <extension>', 'Give your desired extension for file. Supported formate are xlsx and csv', 'xlsx')
	.description('Generate CSV from JSON data')
	.action((file) => {
		const filename = file.filename;
		const extension = file.extension;
		genSheet(filename, extension);
	});

program.parse(process.argv);