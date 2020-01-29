var n = 1;
for (; n < 100; n++) {
    if (n % 3 === 0) {
            console.log(n, "Fizz");
        } else if (n % 5 === 0) {
            console.log(n, "Buzz");
            } else {
                console.log(n, "");
        }
    }


var num = 1;
for (; num < 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
                console.log(num, "FizzBuzz");
        } else {
            console.log(num, "" );
    }
}