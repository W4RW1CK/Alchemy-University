function greater(first, last) {
    if (first > last) {
        return first;
    }
    if (first < last) {
        return last;
    }
}

module.exports = greater;
