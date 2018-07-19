const fs = require('fs');

const getCustomerSync = require('./lib/get-customer-sync');
const createJson = require('./lib/create-json');

const getCustomers = async shop => {
	let data = await getCustomerSync(shop);

	let dataString = JSON.stringify(data);
	
	createJson(dataString);
};

const generateSheet = (output, cb) => {
	if(typeof require !== 'undefined') XLSX = require('xlsx');

	const file = fs.readFileSync('./data.json', 'utf-8');
	const data = JSON.parse(file);
	const exported = output + '.xlsx';
	console.log(data.length);
	const wb = XLSX.utils.book_new();

	wb.Props = {
		Title: 'Customer-Export',
		Subject: 'Test File',
		Author: 'Tahmid Hasan',
		CreatedDate: new Date()
	};

	wb.SheetNames.push('Test Sheet');
	
	const ws = XLSX.utils.json_to_sheet(data);

	wb.Sheets['Test Sheet'] = ws;

	XLSX.writeFileAsync(exported, wb, {bookType: 'xlsx'}, cb);
};

module.exports = { getCustomers, generateSheet };