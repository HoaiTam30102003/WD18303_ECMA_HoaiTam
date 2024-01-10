function generateTableHeader(headerTitles){
    if (!headerTitles || headerTitles.length === 0){
        return "";
    }
    let html = ``;

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
        // console.log(element);
    });
    return `<thead><tr class="text-center">${html}</tr></thead>`;
}

function generateTableRowStudent(object) {
    if (!object || object.length === 0) {
        return "";
    }
    return `<tr>
            <td class="text-center">${object.id}</td>
            <td>${object.name}</td>
            <td class="text-center"><img src="${object.avatar}" height="80"></td>
            <td class="text-center">${object.createdAt}</td>
        </tr>`;
}

function generateTable(headers,data){
    if (!headers || !data || headers.length === 0 || data.length === 0) {
        return "";
    }
    let headerRow = generateTableHeader(headers);
    let html = '';
    data.forEach(element => {
        html += generateTableRowStudent(element)
    });
    return` <table class="table table-bordered border-danger">${headerRow}<tbody>${html}</tbody></table>`;
}



fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(response){
        response.json().then(function(data){
            let headers = ["STT","Họ và tên", "Ảnh Đại Diện", "Ngày tạo"]
            let tableHtml =generateTable(headers, data);
            let table = document.getElementById("tb");
            table.innerHTML= tableHtml;
        })
    })
    .catch(function(err){

    });