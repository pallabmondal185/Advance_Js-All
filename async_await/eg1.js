
function myfunc(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve('problem resolved');
            console.log('inside promise');
        }, 1000);
    })
}

//"async and await make promises easier to write"
//async makes a function return a Promise.
// The await keyword can only be used inside an async function.
//he await keyword makes the function pause the execution and wait for a resolved promise before it continues

async function asynccall(){
    console.log('1. calling');
    const result=await myfunc();
    console.log(result);
    // result.then(data=> console.log(data));
    console.log('2. calling');
}

console.log('3. calling');
asynccall();
console.log('4. calling');
