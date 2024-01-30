export default class Comment {

    constructor(baseUrl, endpoint, id, body, postId) {
        this.baseUrl = baseUrl
        this.endpoint = endpoint
        this.id = id
        this.body = body
        this.postId = postId
    }

    // lấy tất cả đối tượng
    getAll() {
        return axios.get(this.baseUrl + this.endpoint).then((data) => console.log(data.data))
    }

    // lấy 1 đối tượng theo id
    getOne(id) {
        return axios.get(this.baseUrl+this.endpoint+id).then(({data}) => console.log(data))
    }

    // thêm
    add(id, body, postId) {
        let obj = {
            "id": id,
            "body": body,
            "postId": postId
        }
        return axios.post(this.baseUrl+this.endpoint, obj).then((data) => console.log(data))
    }

    // sửa
    edit(id, body, postId) {
        let obj = {
            "id": id,
            "body": body,
            "postId": postId
        }
        return axios.put(this.baseUrl+this.endpoint+id, obj).then((data) => console.log(data))
    }


    // xoá
    delete(id) {
        return axios.delete(this.baseUrl+this.endpoint+id).then((data) => console.log(data))
    }
}