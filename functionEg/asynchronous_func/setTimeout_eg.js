setTimeout(myfunc,3000);
function myfunc(){
    console.log("hello...");
}

//Functions running in parallel to another function are called asynchronous.

setTimeout(function(){console.log("hi...");},3000);