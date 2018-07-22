const getCustomerSync = require('./lib/get-customer-sync');
const createJson = require('./lib/create-json');
const generateSheet = require('./lib/generate-sheet/generate-sheet');

const getCustomers = async shop => {
	let data = await getCustomerSync(shop);

	let dataString = JSON.stringify(data);
	
	createJson(dataString);
};

const genSheet = (filename = 'customer', ext = 'xlsx') => {
	generateSheet(filename, ext, () => {
		console.info(`All data have exported to ${filename}.${ext}`);
	});
};

module.exports = { getCustomers, genSheet };