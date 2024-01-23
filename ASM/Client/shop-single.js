let pro ="http://localhost:3000/products";
fetch(pro)
.then(function (response){
    response.json().then(function (data){
        console.log(data)
        let product = data;
        let html = document.getElementById("pro_card").values;

        let child_html = ``;

        for(let {image, name, price, detail} of product) {
            child_html += `
                <div class="col-6 mt-5 rounded-5">
                    <div class="card">
                        <img class="card-img img-fluid" src="${image}" alt="Card image cap" id="product-detail">
                    </div>

                </div>
                <div class="col-6 mt-5 rounded-5">
                    <div class="card">
                            <div class="card-body">
                                <h1 class="h2">${name}</h1>
                                <p class="h3 py-2">${price}đ</p>
                                <h6>Mô Tả:</h6>
                                <p>${detail}</p>
    
                                <h6>Thành Phần:</h6>
                                <p>hséhsehehéhehéh</p>
    
                                <form action="" method="GET">
                                    <input type="hidden" name="product-title" value="Activewear">
                                    <div class="row">
    
                                        <div class="col-auto">
                                            <ul class="list-inline pb-3">
                                                <li class="list-inline-item text-right">
                                                    Quantity
                                                    <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                                                </li>
                                                <li class="list-inline-item"><span class="btn btn-danger" id="btn-minus">-</span></li>
                                                <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                                                <li class="list-inline-item"><span class="btn btn-danger" id="btn-plus">+</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row pb-3">
                                        <div class="col d-grid">
                                            <button type="submit" class="btn btn-danger btn-lg" name="submit" value="addtocard">Thêm Vào Giỏ</button>
                                        </div>
                                    </div>
                                </form>
    
                            </div>
                        </div>
                    </div>
            `
        }
    })
})

