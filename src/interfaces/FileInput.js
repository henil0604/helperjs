const validator = require("../helpers/validator");
const is = require("../helpers/is");

module.exports = (config) => {

    if (!is.object(config)) { config = {} };

    config = validator.setDefault(config, "multiple", false);
    config = validator.setDefault(config, "directory", false);
    config = validator.setDefault(config, "timeout", 60000);
    config = validator.setDefault(config, "accept", null);

    return config;
}