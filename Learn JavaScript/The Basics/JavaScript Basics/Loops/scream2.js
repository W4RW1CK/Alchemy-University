function scream(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        const remainder = i % 2;
        const isEven = remainder === 0;
        if (isEven) {
            str += "A";
        }
        else {
            str += "a";
        }
    }
    return str;
}
module.exports = scream;
