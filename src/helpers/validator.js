const is = require("./is");

let validator = {};

validator.setDefault = (data, key, value) => {
    if (!is.object(data)) return data;
    if (is.not(data[key])) {
        data[key] = value;
    }
    return data;
}






module.exports = validator;