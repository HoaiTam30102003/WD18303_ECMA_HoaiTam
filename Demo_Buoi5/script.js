// var myConcat = function (arr1, arr2) {
//     let newArray = [...arr1, ...arr2];
//     console.log(newArray);
// }
// console.log(myConcat([1,2,3], [4,5,6]));
//
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(1,1));

// const API_URL= "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students/";
// let callAPIGetStudent = (Student_id) => {
//     let student;
//     fetch(API_URL+Student_id)
//         .then(response => {
//             response.json().then(data => {
//                 console.log(data);
//                 student = data;
//             })
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     return student;
// }
// callAPIGetStudent(44)

// let obj = (a,b) => ({
//     name: a,
//     age: b
// })
// console.log(obj("Javascript", 3))

var myConcat = (arr1, arr2) => [...arr1, ...arr2];
console.log(myConcat([1,2,3], [4,5,6]));