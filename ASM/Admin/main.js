import {productService} from "../Model/model.js";

const tbody = document.querySelector('tbody');
function showPro() {
    tbody.innerHTML = ""
    productService.fetchData('http://localhost:3000/products').then(data => {
        data.forEach(function (item, index) {
            tbody.innerHTML+=`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td><img src="${item.image}" width="100px"></td>
                        <td>${item.price}đ</td>
                        <td>${item.detail}</td>
                        <td>
                            <button type="button" class="openEditPage" data-id="${item.id}">Sửa</button>
                            <button type="button" class="deletePro" data-id="${item.id}">Xoá</button>
                        </td>
                    </tr>
                `
        })
    })

}
showPro();

// Add Pro
const addModal = document.querySelector('#addModal');
const closeAdd = document.querySelector('.close');
document.querySelector('#openAddPage').onclick=function (){
    addModal.style.display="block";
}
closeAdd.onclick=function (){
    addModal.style.display="none";
}

document.querySelector('#addPro').onclick=function (){
    const name = document.querySelector('#name').value;
    const image = document.querySelector('#image').value.split('\\').pop();
    const price = document.querySelector('#price').value;
    const category = document.querySelector('#category').value;
    const detail = document.querySelector('#detail').value;

    productService.getLastId().then(id => {
        const pro={
            'name': name,
            'category_id': Number(category),
            'detail': detail,
            'image': image,
            'price': Number(price),
            'id': (Number(id)+1).toString()
        }
    productService.addData(pro);
    })
    addModal.style.display="none";
    showPro()
}

// Edit Pro
const editModal = document.querySelector('#editModal');



document.querySelector('tbody').addEventListener("click", function (e){
    if(e.target.classList.contains('openEditPage')){
        const id = e.target.dataset.id;
        productService.getDataById(id).then(pro=>{
            editModal.style.display="block";
            editModal.innerHTML+=`
        <div class="modal-content">
                    <span class="close">&times;</span>

                    <div class="form">
                        <label for="">Tên sản phẩm</label>
                        <br>
                        <input value="${pro.name}" type="text" id="editName">
                        <label for="">Hình ảnh</label>
                        <br>
                        <img id="showImage" src="./img/${pro.image}" width="100px"">
                        <input type="file" id="editImage">
                        <br>
                        <label for="">Giá</label>
                        <br>
                        <input value="${pro.price}" type="text" id="editPrice">
                        <label for="">Danh mục</label>
                        <br>
                        <select id="editCategory">
                            <option ${pro.category="Nước tẩy trang"?"selected":""} value="1">Nước tẩy trang</option>
                            <option ${pro.category="Dầu tẩy trang"?"selected":""} value="2">Dầu tẩy trang</option>
                            <option ${pro.category="Kem chống nắng"?"selected":""} value="3">Kem chống nắng</option>
                            <option ${pro.category="Sữa rửa mặt"?"selected":""} value="4">Sữa rửa mặt</option>
                            <option ${pro.category="Tẩy da chết"?"selected":""} value="5">Tẩy da chết</option>
                            <option ${pro.category="Kem dưỡng"?"selected":""} value="6">Kem dưỡng</option>
                            <option ${pro.category="Xịt khoáng"?"selected":""} value="7">Xịt khoáng</option>
                        </select>
                        <label for="">Mô tả</label>
                        <br>
                        <textarea type="text" id="editDetail">${pro.detail}</textarea>
                        <button class="editPro" data-id="${id}" id="editPro">Sửa</button>
                    </div>
                </div>
    `
        })
    }
})
editModal.addEventListener("click", function (e){
    if(e.target.classList.contains('editPro')){
        const id=e.target.dataset.id;
        const editName = document.querySelector('#editName').value;
        var editImage = document.querySelector('#editImage').value.split('\\').pop();
        if(editImage==""){
            editImage = document.querySelector('#showImage').src.split("/").pop();
        }
        const editPrice = document.querySelector('#editPrice').value;
        const editCategory = document.querySelector('#editCategory').value;
        const editDetail = document.querySelector('#editDetail').value;

        const pro={
            'name': editName,
            'category_id': Number(editCategory),
            'detail': editDetail,
            'image': editImage,
            'price': Number(editPrice),
            'id': id
        }
        productService.updateData(id,pro)
        editModal.style.display='none';
        showPro()
    }
})

// Delete Pro
document.querySelector('tbody').addEventListener("click", function (e){
    if(e.target.classList.contains('deletePro')){
        const id=e.target.dataset.id;
        console.log(id)
        productService.deleteData(id);
    }
})