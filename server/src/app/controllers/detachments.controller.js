const fs = require('fs');

const detachments_list = JSON.parse(fs.readFileSync('../assets/json/detachments.json', 'utf8'));

exports.detachments_list = function () {
    return detachments_list;
}

exports.detachment = function (det_name) {
    if(typeof det_name !== typeof 'string') {
        throw 'Name is not a string'
    }

    const detachment = detachments_list.find((detachment) => {
        if (detachment.name === det_name) {
            return detachment;
        }
    });

    if(detachment === undefined) {
        throw `Detachment "${det_name}" not found`
    }

    return detachment;
}
