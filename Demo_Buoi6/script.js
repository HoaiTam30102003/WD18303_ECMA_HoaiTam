// let object = {
//     name: "Tèo",
//     age: 25,
//     city: "Hà Nội",
//     playgame : function (){
//         console.log(this);
//         console.log(this.name + " is playing game.")
//     },
//
//     cooking: () => {
//         console.log(this);
//         console.log(this.name + " cooking something delicious.")
//     }
// }
//
// object.cooking();
//
// function helloWord(button) {
//     console.log(button.getAttribute('attribute-name'));
//
// }
//
// function multiply(a, b) {
//     console.log("a: ", a);
//     console.log("b: ", b);
//     return a * b;
// }
// console.log(multiply(5, 2));

const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));

