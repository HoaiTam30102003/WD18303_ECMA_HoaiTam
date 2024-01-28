export class APICaller {
    constructor(baseUrl, endpoint) {
        this.baseUrl = baseUrl;
        this.endpoint = endpoint;
    }

    // lấy dữ liệu
    get() {
        return axios.get(this.baseUrl + this.endpoint).then((data) => console.log(data.data))
    }
}



export class Comment extends APICaller {

    constructor(baseUrl, endpoint, id, body, postId) {
        super(baseUrl, endpoint);
        this.endpoint = endpoint;
        this.id = id
        this.body = body
        this.postId = postId
    }

    // lấy tất cả đối tượng
    getAll() {
        return this.get()
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

