let is = {};

is.object = (data) => {
    return typeof data == "object" && !Array.isArray(data);
}

is.Array = (data) => {
    return Array.isArray(data);
}

is.string = (data) => {
    return typeof data == "string";
}

is.number = (data) => {
    return typeof data == "number";
}

is.not = (data) => {
    return (data == null || data == "null") || (data == undefined || data == "undefined");
}

is.odd = (data) => {
    if (!is.number(data)) {
        return false;
    }
    return data % 2 != 0;
}

is.even = (data) => {
    if (!is.number(data)) {
        return false;
    }
    return data % 2 == 0;
}




module.exports = is;