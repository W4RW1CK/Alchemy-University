function isEven(num) {
    let div = num % 2;
    if (div === 0) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = isEven;
