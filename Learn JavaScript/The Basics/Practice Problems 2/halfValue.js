function halfValue(numbers) {
    let a = []
    for (i = 0; i < numbers.length; i++) {
        a[i] = Math.round(numbers[i] / 2);

    }
    return a;
}

module.exports = halfValue;
