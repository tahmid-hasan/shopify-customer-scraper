const https = require('https');

const request = uri => {
    return new Promise((resolve, reject) => {
        https.get(uri, res => {
            let data = '';
            
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                data = JSON.parse(data);
                resolve(data);
            });
        })
        .on('error', err => reject(err));
    });
};

module.exports = request;