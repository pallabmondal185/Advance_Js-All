let student=function(){
    console.log("hello student ");
}
student();


//callback function

function complex(add){
    console.log(add(200,300));
}

complex(function(a,b){
    return a+b;
})



console.log();

console.warn();
 