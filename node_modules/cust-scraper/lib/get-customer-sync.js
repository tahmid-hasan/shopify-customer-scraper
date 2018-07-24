const request = require('./request');
const getTotalCustomerCount = require('./count');

const getCustomerSync = async shop => {

    const count = await getTotalCustomerCount(shop);
    const pages = Math.ceil(count/250);
    return new Promise(async (resolve, reject) => {

        if (pages <= 1) {
            let uri = `https://${shop.apikey}:${shop.password}@${shop.hostname}/admin/customers.json?limit=250`;

            let data = await request(uri);
            let filteredData = data.customers;

            resolve(filteredData);
        }
        else {
            let dataArray = [];

            for(let i = 1; i <= pages; i++) {
                let uri = `https://${shop.apikey}:${shop.password}@${shop.hostname}/admin/customers.json?limit=250&page=${i}`;

                let data = await request(uri);
                let filteredData = data.customers;

                dataArray.push(filteredData);
            }

            let finalObj = await convertToSingleArr(dataArray);

            resolve(finalObj);
        }
    });
};

const convertToSingleArr = arr => {
    return new Promise((resolve, reject) => {
        let singleArray = [];

        arr.forEach(item => {
            item.forEach(obj => {
                singleArray.push(obj);
            });
        });

        resolve(singleArray);
    });
};

module.exports = getCustomerSync;