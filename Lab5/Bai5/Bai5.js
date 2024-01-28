import {APICaller, Comment} from "./module.js";

let a = new APICaller("http://localhost:3000/","comments")
console.log(a.get())

let b = new Comment("http://localhost:3000/","comments/")
console.log(b.getAll())
console.log(b.add(2,"abcd", 1))
console.log(b.edit(2,"2468",1))
console.log(b.getOne(2))
console.log(b.delete(2))