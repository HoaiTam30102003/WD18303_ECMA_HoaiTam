import {productService} from "../Model/model.js";

const proHomeNtt = document.getElementById('proHomeNtt');
productService.fetchData('http://localhost:3000/products?category_id=1&_limit=3').then(data => {
    data.forEach(function (item){
        proHomeNtt.innerHTML+=`
            <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="${item.image}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">

                            <a href="shop-single.html" class="h2 text-decoration-none text-dark"><p class="h3 text-center">${item.name}</p></a>
                            <p class="text-center mt-3">${item.price}đ</p>
                         
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

const proHomeTdc = document.getElementById('proHomeTdc');
productService.fetchData('http://localhost:3000/products?category_id=5&_limit=3').then(data => {
    data.forEach(function (item){
        proHomeTdc.innerHTML+=`
            <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="${item.image}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">

                            <a href="shop-single.html" class="h2 text-decoration-none text-dark"><p class="h3 text-center">${item.name}</p></a>
                            <p class="text-center mt-3">${item.price}đ</p>
                         
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

const proHomeKd = document.getElementById('proHomeKd');
productService.fetchData('http://localhost:3000/products?category_id=6&_limit=3').then(data => {
    data.forEach(function (item){
        proHomeKd.innerHTML+=`
            <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="${item.image}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">

                            <a href="shop-single.html" class="h2 text-decoration-none text-dark"><p class="h3 text-center">${item.name}</p></a>
                            <p class="text-center mt-3">${item.price}đ</p>
                         
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


