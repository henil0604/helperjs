let $h = {};

$h._ = {
    is: require("./src/helpers/is"),
    validator: require("./src/helpers/validator")
};

$h.FileInput = require("./src/FileInput");
$h.random = require("./src/random");
$h.put = require("./src/put");
$h.clone = require("./src/clone");
$h.autoExpand = require("./src/autoExpand");
$h.buildQuery = require("./src/buildQuery");
$h.getContrastColor = require("./src/getContrastColor");
$h.getParam = require("./src/getParam");
$h.isEqual = require("./src/isEqual");
$h.timeDiff = require("./src/timeDiff");




window.$h = $h;
module.exports = $h;