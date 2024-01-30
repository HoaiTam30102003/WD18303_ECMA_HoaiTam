export default class APICaller {
    constructor(baseUrl, endpoint) {
        this.baseUrl = baseUrl;
        this.endpoint = endpoint;
    }

    // lấy dữ liệu
    get() {
        return axios.get(this.baseUrl + this.endpoint).then((data) => console.log(data.data))
    }
}