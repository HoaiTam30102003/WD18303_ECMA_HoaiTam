//1
const axios = require('axios');
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

//2
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function (url){
            return axios.get(url);
        })
    );
    return results;
}