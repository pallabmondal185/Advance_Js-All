//normal function
myfunc();
function myfunc(){
    console.log("this is a normal function");
}
myfunc();


//arrow function
// arrow functions are not hoisted, and so you cannot call them before you declare them
// array_func();  //error:Cannot access before initialization
const array_func=()=>{
    console.log("this is array function");
}
array_func();


//anonymas function
//anonymous function refers to a function that does not have a name or a title.
// anonymas functions are not hoisted, and so you cannot call them before you declare them
// hello();  //error:Cannot access before initialization
const hello=function(){
    console.log("this is a anonymus function");
}
hello();
