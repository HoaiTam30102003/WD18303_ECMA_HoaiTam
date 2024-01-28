export class APICaller {
    constructor(baseUrl, endpoint) {
        this.baseUrl = baseUrl;
        this.endpoint = endpoint;
    }
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
    getAll() {
        return this.get()
    }

    getOne(id) {
        return axios.get(this.baseUrl+this.endpoint+id).then(({data}) => console.log(data))
    }

    add(id, body, postId) {
        let obj = {
            "id": id,
            "body": body,
            "postId": postId
        }
        return axios.post(this.baseUrl+this.endpoint, obj).then((data) => console.log(data))
    }

    edit(id, body, postId) {
        let obj = {
            "id": id,
            "body": body,
            "postId": postId
        }
        return axios.put(this.baseUrl+this.endpoint+id, obj).then((data) => console.log(data))
    }

    delete(id) {
        return axios.delete(this.baseUrl+this.endpoint+id).then((data) => console.log(data))
    }
}

