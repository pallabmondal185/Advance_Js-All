// 
async function myfunc(){
    console.log('inside myfunc() function');    
    return "hello";
}
console.log('before calling myfunc');
let a=myfunc();
console.log(a);
console.log('after calling myfunc');
