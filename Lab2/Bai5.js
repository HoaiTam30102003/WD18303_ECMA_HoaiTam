function generateTableHeader(headerTitles){
    if (!headerTitles || headerTitles.length === 0){
        return "";
    }

    let html = '';

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
    });


    return `<thead><tr>${html}</tr></thead>`;
}

function generateTableRow(object){
    if (!object || object.length === 0){
        return '';
    }

    return `<tr>
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td><img src="${object.avatar}" alt="" height="100px"></td>
        <td>${object.createAt}</td>
    </tr>`;
}

function generateTable(headers, data){
   let headerRow = generateTableHeader(headers);

   let html = '';

   data.forEach(element => {
       html += generateTableRow(element);
   })

    return `<table>${headerRow} <tbody>${html}</tbody></table>`;
}

let obj = [
        {
            id: 1,
            name: "May Ne",
            avatar: "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/120315532_2898958557005122_8805783958124313158_n.png?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=mA2RXjn_jzMAX-19JIh&_nc_ht=scontent.fvca1-1.fna&oh=00_AfBHjv2LOcA11YPXbrEy0bsnTsgL8ykeRztJ-7Xnn21PNg&oe=65C4B2DE",
            createAt: "2024/01/09"
        },
        {
            id: 2,
            name: "May Ne 2",
            avatar: "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/120315532_2898958557005122_8805783958124313158_n.png?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=mA2RXjn_jzMAX-19JIh&_nc_ht=scontent.fvca1-1.fna&oh=00_AfBHjv2LOcA11YPXbrEy0bsnTsgL8ykeRztJ-7Xnn21PNg&oe=65C4B2DE",
            createAt: "2024/01/10"
        },
        {
            id: 3,
            name: "May Ne 3",
            avatar: "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/120315532_2898958557005122_8805783958124313158_n.png?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=mA2RXjn_jzMAX-19JIh&_nc_ht=scontent.fvca1-1.fna&oh=00_AfBHjv2LOcA11YPXbrEy0bsnTsgL8ykeRztJ-7Xnn21PNg&oe=65C4B2DE",
            createAt: "2024/01/11"
        },
        {
            id: 4,
            name: "May Ne 4",
            avatar: "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/120315532_2898958557005122_8805783958124313158_n.png?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=mA2RXjn_jzMAX-19JIh&_nc_ht=scontent.fvca1-1.fna&oh=00_AfBHjv2LOcA11YPXbrEy0bsnTsgL8ykeRztJ-7Xnn21PNg&oe=65C4B2DE",
            createAt: "2024/01/12"
        }
    ];

let header = [
    "ID",
    "Họ và tên",
    "Avatar",
    "Ngày tạo"
];
document.write(generateTable(header, obj))
