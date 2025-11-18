function lessThanFive(array) {
    return array.filter((el) => {
        return el < 5;
    });
}

module.exports = lessThanFive;
