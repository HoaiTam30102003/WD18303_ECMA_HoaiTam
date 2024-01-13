let multiply = (num1, num2) => num1 * num2;
console.log(multiply(4,4));

let toCelsius = (fahrenheit) => (5/9) * (fahrenheit - 32);
console.log(toCelsius(4));

let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}
console.log(padZeros(4, 6));

let power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(10, 20));

let greet = (who) => console.log("Hello " + who);
console.log(greet("Tâm"));