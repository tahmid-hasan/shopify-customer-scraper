const request = require('./request');

const getTotalCustomerCount = shop => {
    let uri = `https://${shop.apikey}:${shop.password}@${shop.hostname}/admin/customers/count.json`;

    return new Promise((resolve, reject) => {
        const countObj =  request(uri);
        
        countObj.then(data => {
            resolve(data.count);
        });
    });
};

module.exports = getTotalCustomerCount;