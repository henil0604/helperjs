/*!
 * Build a query string from an object of data
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */
function buildQuery(data) {
    return new URLSearchParams(data).toString();
}

module.exports = buildQuery;