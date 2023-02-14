let myPromise=new Promise(function(resolve,reject){
    let a=5,b=6;
    if(a==b){
        resolve("numbers are same:");
    }
    else{
        reject("numbers are not same");
    }
});

function display(some){
    console.log(some);
}

myPromise.then(
    function(value){
        display(value);
    },
    function(error){
        display(error);
    }
)

