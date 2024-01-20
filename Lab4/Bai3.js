let fs = require('fs');


fs.readFile(
    './data.json',
    {encoding: 'utf8'},
    async function (err, data) {
        console.log('Data loaded from disk', data);

        await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (res){
                console.log('Data downloaded from url', res.data);
            });
    }
)