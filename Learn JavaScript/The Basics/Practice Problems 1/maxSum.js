function maxSum(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result += i;
    }
    return result;
}

module.exports = maxSum;
