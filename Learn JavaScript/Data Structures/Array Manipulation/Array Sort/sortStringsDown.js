function sortStringsDown(array) {
    array.sort((a, b) => {
        return (b).localeCompare(a);
    });
}

module.exports = sortStringsDown;
