import {productService} from "../Model/model.js";

const product = document.getElementById("pro_card")
productService.fetchData('http://localhost:3000/products').then(data => {
    data.forEach(function (item){
        product.innerHTML += `
            <div class="col-md-4">
                                <div class="card mb-4 product-wap rounded-0">
                                    <div class="card rounded-0">
                                        <img class="card-img rounded-0 img-fluid" src="${item.image}">
                                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul class="list-unstyled">
                                                <li><a class="btn btn-danger text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <a href="shop-single.html" class="h3 text-decoration-none" id="proDetail" onclick="data()"><p class="text-center">${item.name}</p></a>
                                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            
                                            <li class="pt-2">
                                                <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                            </li>
                                        </ul>
                                        
                                        <p class="text-center mb-0">${item.price}đ</p>
                                        <div class="row pt-3">
                                            <div class="col d-grid">
                                                <button type="submit" class="btn btn-danger btn-lg" name="submit" value="addtocard">Thêm Vào Giỏ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
        `
    })
})

const cate = document.getElementById("cate");
productService.fetchData("http://localhost:3000/category").then(data => {
    data.forEach(function (item){
        cate.innerHTML+=`
            <a class="text-decoration-none text-dark" href="#"><li class="mt-2 border border-1 rounded-3 p-2">${item.name}</li></a>
        `
    })
})

