
function getParam(param, url = window.location) {
    let params = new URL(url).searchParams;
    let val = params.getAll(param);
    if (val.length > 1) return val;
    return val[0];
}

getParam.__proto__.all = (url = window.location) => {
    let params = {};
    new URL(url).searchParams.forEach(function (val, key) {
        if (params[key] !== undefined) {
            if (!Array.isArray(params[key])) {
                params[key] = [params[key]];
            }
            params[key].push(val);
        } else {
            params[key] = val;
        }
    });
    return params;
};


module.exports = getParam;