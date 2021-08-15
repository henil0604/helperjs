function autoExpand(field) {

    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    let computed = window.getComputedStyle(field);

    // Calculate the height
    let height =
        parseFloat(computed.paddingTop) +
        field.scrollHeight +
        parseFloat(computed.paddingBottom);

    field.style.height = height + 'px';

}

module.exports = autoExpand;