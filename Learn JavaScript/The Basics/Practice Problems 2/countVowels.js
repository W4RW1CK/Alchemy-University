function countVowels(str) {
    let vowels = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a") {
            vowels++;
        }
        else if (str[i].toLowerCase() === "e") {
            vowels++;
        }
        else if (str[i].toLowerCase() === "i") {
            vowels++;
        }
        else if (str[i].toLowerCase() === "o") {
            vowels++;
        }
        else if (str[i].toLowerCase() === "u") {
            vowels++;
        }
    }
    return vowels;
}

module.exports = countVowels;
