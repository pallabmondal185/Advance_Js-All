function myFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            error=false;
            if(!error){
                console.log('there is no error:');
                resolve('error resolved');
            }else{
                console.log('there is some error:')
                reject('error rejected');
            }
        }, 2000);
    })
}

myFunc().then((values)=>{
    console.log('no error: '+values);
}).catch((values)=>{
    console.log('error: '+values);
});