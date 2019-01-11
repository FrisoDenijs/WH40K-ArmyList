const fs = require('fs');

const detachments_list_uri = '../assets/json'
const json_name = 'detachments.json';

const get_detachment_list = (version) => {
    return JSON.parse(fs.readFileSync(`${detachments_list_uri}/${version}/${json_name}`, 'utf8'));
}

exports.detachments_list = (version) => {
    if(typeof version !== typeof 'string') {
        throw 'Version is not a string';
    }
    
    return get_detachment_list(version);
}

exports.detachment = (version, det_name) => {
    if(typeof version !== typeof 'string') {
        throw 'Version is not a string';
    }

    if(typeof det_name !== typeof 'string') {
        throw 'Name is not a string';
    }

    const detachments_list = get_detachment_list(version);

    const detachment = detachments_list.find((detachment) => {
        if (detachment.name === det_name) {
            return detachment;
        }
    });

    if(detachment === undefined) {
        throw `Detachment "${det_name}" not found`;
    }

    return detachment;
}
