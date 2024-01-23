let productAPI = "http://localhost:3000/products";
fetch(productAPI)
    .then(function (response){
        response.json().then(function (data){
            console.log(data)
            let product = data;
            let html = document.getElementById("list");

            let child_html = ``
            let index = 1;
            for(let {image, name, price, detail} of product){
                child_html += `
                    <tr>
                        <td>${index++}</td>
                        <td>${name}</td>
                        <td><img src="${image}" width="100px"></td>
                        <td>${price}</td>
                        <td>${detail}</td>
                    </tr>
                `
            }
            child_html += ``;
            html.innerHTML = child_html;
        })
    })