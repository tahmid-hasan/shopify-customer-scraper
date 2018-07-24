const Spinner = require('cli-spinner').Spinner;

const getCustomerSync = require('./lib/get-customer-sync');
const createJson = require('./lib/create-json');
const generateSheet = require('./lib/generate-sheet/generate-sheet');

const getCustomers = async shop => {
	let spinner = new Spinner('Fetching Data...%s');
	spinner.setSpinnerString(`|/-\\`);
	spinner.start();

	let data = await getCustomerSync(shop);
	
	spinner.stop(1);

	let dataString = JSON.stringify(data);
	createJson(dataString);
};

const genSheet = async (filename, ext) => {
	let spinner = new Spinner('Generating Spreadsheet...%s');
	spinner.setSpinnerString(`|/-\\`);
	spinner.start();

	const genSheet = await generateSheet(filename, ext, () => {
		console.info(`All data have exported to ${filename}.${ext}`);
	});

	spinner.stop(1);
};

module.exports = { getCustomers, genSheet };