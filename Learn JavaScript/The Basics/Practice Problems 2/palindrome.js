function isPalindrome(string) {
    let a = "";
    for (let i = string.length - 1; i >= 0; i--) {
        a += (string[i]);
        if (a === string) {
            return true;
        }
    }
    return false;
}

module.exports = isPalindrome;
