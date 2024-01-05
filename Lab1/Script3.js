fetch("https://api.publicapis.org/entries")
    .then(function (response){
        response.json().then(function (data){
            console.log(data);
            let array = data.entries;

            let html = document.getElementById('12345');

            let child_html = '<ul><li><strong>COUNT: </strong>${data}</li>';


            array.forEach(element => {
                console.log(element.Description);
                child_html += `<li> ${element.Description} </li>`;
            })

            child_html += '</ul>';
            html.innerHTML = child_html;
        })
    })