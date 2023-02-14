let url="hello.txt";
// fetch(url).then(x => x.text())
// .then(y => document.getElementById('demo').innerHTML=y );

function getData(){
console.log('starting fetching data');
fetch(url).then((response)=>{
    console.log('inside first then')
    return response.text();
}).then((data)=>{
    console.log('inside second then');
    console.log(data);
    // document.write(data);
    // document.getElementById('demo').innerHTML=data;
})
}

getData();