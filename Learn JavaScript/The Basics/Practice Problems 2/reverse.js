function reverse(string) {
    let a = "";
    for (let i = string.length - 1; i >= 0; i--) {
        a += string[i];
    }
    return a;
}

module.exports = reverse;
