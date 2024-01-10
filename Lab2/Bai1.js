const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    const failureItems = [result];

    let html = '';

    arr.forEach(element => {
        html += `<li class="text-warning">${element}</li>`;
    })
    return `<ul>${html}</ul>`;
}

const failuresList = makeList(result.failure);
document.write(failuresList)