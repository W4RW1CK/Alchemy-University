function firstThree(array) {
    return array.filter((array, i) => {
        return i < 3;
    });
}

module.exports = firstThree;
