function splitAtX(string) {
    const stringX = string.indexOf("x")
    const part1 = string.slice(0, stringX)
    const part2 = string.slice(stringX+1)
    if (part1.length > part2.length) {
        return part1;
    }
    else if( part1.length < part2.length) {
        return part2;
    }
}

module.exports = splitAtX;
