const fs = require('fs');

const createJSON = data => {
    fs.writeFile('data.json', data, 'utf-8', () => {
        console.info('All customers have exported to the data.json');
    });
}

module.exports = createJSON;