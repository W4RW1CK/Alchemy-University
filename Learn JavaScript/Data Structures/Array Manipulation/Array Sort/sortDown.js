function sortDown(array) {
    array.sort((a, b) => {
        return b - a
    });
}

module.exports = sortDown;
