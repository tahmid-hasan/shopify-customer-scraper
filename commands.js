#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { getCustomers, generateSheet } = require('./index');

const shop = require('./config.json');
const questions = require('./lib/questions');

program
	.version('1.0.0')
	.description('A simple CLI app for scraping customers from a Shopify store');

program
	.command('get-cust')
	.alias('gc')
	.description('Get all the customers from the store.')
	.action(() => {
		prompt(questions).then(answers => getCustomers(answers));
	});

program
	.command('generate-sheet <filename>')
	.alias('gs')
	.description('Generate CSV from JSON data')
	.action((filename) => {
		generateSheet(filename, () => {
			console.log('File Exported');
		});
	});

program.parse(process.argv);