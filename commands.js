const program = require('commander');
const { prompt } = require('inquirer');
const getCustomers = require('./index');

const shop = require('./config.json');

const questions = [
	{
		type: 'input',
		name: 'hostname',
		message: 'Please enter the shop URL:'
	},
	{
		type: 'input',
		name: 'apikey',
		message: 'Please enter the apiKey (Find the apiKey from the private app on your store):'
	},
	{
		type: 'input',
		name: 'password',
		message: 'Please enter the password (Find the password from the private app on your store):'
	}
];

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

program.parse(process.argv);