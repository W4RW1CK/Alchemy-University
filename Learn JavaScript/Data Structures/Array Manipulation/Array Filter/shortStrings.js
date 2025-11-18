function shortStrings(array) {
    return array.filter((el) => {
        return el.length <= 3;
    });
}

module.exports = shortStrings;
