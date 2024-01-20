// const demoPromises = () => {
//     return new Promise((resolve, reject) => {
//         fetch("http://localhost:3000/comments")
//             .then((response) => {
//                 response.json().then((data) => {
//                     resolve(data);
//                 })
//             })
//     })
// }
//  demoPromises().then((data) => {
//      console.log(data)
//  })

// setTimeout(() => {
//     console.log("2 giay load");
// }, 2000)
//
// setTimeout(() => {
//     console.log("5 giay load");
// }, 5000)
//
// setTimeout(() => {
//     console.log("10 giay load");
// }, 10000)

let array = [
    "1",
    "2",
    "3"
];
let [a,b,c] = array

let data = {
    data: [
        {
            name: "abc"
        }
    ]
};

let {array_data} = data;
console.log(array_data);


const API_URL = "http://localhost:3000/";
axios.get(API_URL+ "comments").then((data) => console.log(data.data));

axios.get(API_URL+ "comments").then(({data}) => console.log(data));

let comment = {
    "body": "Nội dung cần sửa",
    "postId": 1
}
// thêm mới
axios.post(API_URL+ "comments", comment).then((response) => console.log(response));

// sửa
axios.put(API_URL+ "comments"+2, comment).then((response) => console.log(response));

// xoá
axios.delete(API_URL+ "comments"+2).then((response) => console.log(response));

// lấy 1
axios.get(API_URL+ "comments").then(({data}) => console.log(data));