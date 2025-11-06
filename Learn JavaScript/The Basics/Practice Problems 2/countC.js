function countC(str) {
    let c = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "c") {
            c++;
        }
    }
    return c;
}

module.exports = countC;
