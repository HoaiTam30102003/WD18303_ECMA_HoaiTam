import APICaller from "./API_Caller.js";
import Comment from "./Comment.js";
import Post from "./Post.js";

let api = new APICaller("http://localhost:3000/", "posts")
console.log(api.get())

let com = new Comment("http://localhost:3000/", "comments/")
console.log(com.getAll())
console.log(com.getOne(2))
console.log(com.add(2, "abc", 1))
console.log(com.edit(2, "bcde", 2))
console.log(com.delete(2))

let post = new Post("http://localhost:3000/", "posts/")
console.log(post.getAll())
console.log(post.getOne(2))
console.log(post.add(2,"abcde","hihi"))
console.log(post.edit(2,"123456","haha"))
console.log(post.delete(2))