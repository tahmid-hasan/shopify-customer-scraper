const getCustomerSync = require('./lib/get-customer-sync');
const createJson = require('./lib/create-json');

const getCustomers = async shop => {
	let data = await getCustomerSync(shop);

	let dataString = JSON.stringify(data);
	
	createJson(dataString);
};

module.exports = getCustomers;