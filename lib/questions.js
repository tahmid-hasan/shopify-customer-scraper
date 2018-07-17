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

module.exports = questions;