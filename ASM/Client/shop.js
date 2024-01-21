let productAPI = "https://65a6699074cf4207b4eff5c1.mockapi.io/api/products";
fetch(productAPI)
.then(function (response){
    response.json().then(function (data){
        console.log(data)
        let product = data;
        let html = document.getElementById("pro_card");

        let child_html = ``

        for(let {image, name, price} of product){
            child_html += `<div class="col-md-4">
                                <div class="card mb-4 product-wap rounded-0">
                                    <div class="card rounded-0">
                                        <img class="card-img rounded-0 img-fluid" src="${image}">
                                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul class="list-unstyled">
                                                <li><a class="btn btn-danger text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <a href="shop-single.html" class="h3 text-decoration-none"><p class="text-center">${name}</p></a>
                                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            
                                            <li class="pt-2">
                                                <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        
                                        <p class="text-center mb-0">${price}đ</p>
                                        <div class="row pt-3">
                                            <div class="col d-grid">
                                                <button type="submit" class="btn btn-danger btn-lg" name="submit" value="addtocard">Thêm Vào Giỏ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>`
        }
        child_html += ``;
        html.innerHTML = child_html;
    })
})

