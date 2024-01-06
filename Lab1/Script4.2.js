fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function (response){
        response.json().then(function (data){
            console.log(data);
            let array = data;

            let html = document.getElementById('tb');
            let stt = 1;

            let child_html = `<table class="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Ảnh đại diện</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Ngày tạo</th>
                        
                    </tr>
                    </thead>
                    `

            for(let {avatar, name, createdAt} of array) {

                child_html += `<tbody>
                        <tr>
                            <td>${stt++}</td>
                            <td><img src="${avatar}" alt=""></td>
                            <td>${name}</td>
                            <td>${createdAt}</td>
                            
                        </tr>
                        
                        </tbody>`
            }

            child_html += `</table>`;
            html.innerHTML = child_html;
        })
    })