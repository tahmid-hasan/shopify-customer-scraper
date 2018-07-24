const getPropName = obj => {
    let finalArray = [];

    const firstFase = Object.keys(obj);

    firstFase.map(key => {
        if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            
            Object.keys(obj[key]).forEach(item => {
                let originalName = key;
                let dynamicName = `${originalName}/${item}`;
                finalArray.push(dynamicName);
            });
        } else if (!Array.isArray(obj[key]) && obj[key] !== null) {
            finalArray.push(key);
        } else {
            finalArray.push(key);
        }
    });

    return finalArray;
}

const getValuesFromObject = obj => {
    let valueArray = [];

    const keys = Object.keys(obj);

    keys.map(key => {
        if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            Object.keys(obj[key]).forEach(item => {
                if(obj[key][item] !== null) {
                    valueArray.push(obj[key][item]);
                } else {
                    valueArray.push('');
                }
            });
        } else if (!Array.isArray(obj[key]) && obj[key] !== null) {
            valueArray.push(obj[key]);
        } else {
            valueArray.push('');
        }
    });

    return valueArray;

}

const objectToAOA = obj => {
    return new Promise((resolve, reject) => {
        try {
            let aoa = [];
            obj.map((obj, i) => {
                if(i !== 0) {
                    aoa.push(getValuesFromObject(obj));
                } else {
                    aoa.push(getPropName(obj));
                    aoa.push(getValuesFromObject(obj));
                }
            });

            resolve(aoa);

        } catch (err) {
            reject(err);
        }
    });
}

module.exports = objectToAOA;