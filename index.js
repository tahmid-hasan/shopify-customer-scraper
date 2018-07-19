const getCustomerSync = require('./lib/get-customer-sync');
const createJson = require('./lib/create-json');
const generateSheet = require('./lib/generate-sheet');

const getCustomers = async shop => {
	let data = await getCustomerSync(shop);

	let dataString = JSON.stringify(data);
	
	createJson(dataString);
};

module.exports = { getCustomers, generateSheet };