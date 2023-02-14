//A Promise is an object representing the eventual completion or failure of an asynchronous operation.


function myFunc(){
   return new Promise(function(resolve,reject){
    error=true;
    if(!error){
        console.log('there is no error:');
        resolve('error resolved');
    }else{
        console.log('there is some error:')
        reject('error rejected');
    }
   })
}

myFunc().then(function(values){
    console.log('no error: '+values);
}).catch(function(values){
    console.log('error: '+values);
})