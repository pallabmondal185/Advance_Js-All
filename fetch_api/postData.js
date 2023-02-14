
function postData(){
    let url='https://dummy.restapiexample.com/api/v1/create';
    data='{"name":"lopp","salary":"185985","age":"23"}';
    param={
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: data
    }
    fetch(url,param).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

postData();