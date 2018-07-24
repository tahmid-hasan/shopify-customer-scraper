const fs = require('fs');
const XLSX = require('xlsx');

const objectToAOA = require('./obj-to-aoa');

// Generate Sheet
const generateSheet = (filename, ext, cb) => {

	return new Promise(async (resolve, reject) => {

		let data;
		try {
			data = fs.readFileSync('./data.json', 'utf-8');
		}
		catch (err) {
			console.info(`No data.json file found. Please try to execute 'scs gc' first then run 'scs gs'`);
			process.exit(1);
		}
		
		let obj = JSON.parse(data);
		let aoa = await objectToAOA(obj);

		const exported = filename + '.' + ext;
		const wb = XLSX.utils.book_new();

		wb.Props = {
			Title: 'Customer-Export',
			Subject: 'Test File',
			Author: 'Tahmid Hasan',
			CreatedDate: new Date()
		};

		wb.SheetNames.push('Customers');
		
		const ws = XLSX.utils.aoa_to_sheet(aoa);

		wb.Sheets['Customers'] = ws;

		XLSX.writeFileAsync(exported, wb, {bookType: ext}, cb);

		resolve(true);
	});
};

module.exports = generateSheet;
