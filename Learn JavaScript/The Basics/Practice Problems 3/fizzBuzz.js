function fizzBuzz(numbers) {
    let a = "";
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0)  {
            a += "fizzbuzz";
        }
        else if(numbers[i] % 3 === 0) {
            a += "fizz";
        }
        else if(numbers[i] % 5 === 0) {
            a += "buzz";
        }
    }
    return a;
}

module.exports = fizzBuzz;
