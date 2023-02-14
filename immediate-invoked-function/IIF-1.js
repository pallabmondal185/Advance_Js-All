// Normal function
function myFunc(){
console.log('myFunc');
}
myFunc();

// immediate invoked function
//An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
(function(){
    console.log('pallab');
})();

// arrow function
(()=>{
    console.log('arrow function');
})();