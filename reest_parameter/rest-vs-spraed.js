//rest Parameter:-
//the rest operator puts the individual elements or values into a JavaScript array. 
//There must be only one rest operator in javascript functions.
function restEg(...arg){
    console.log(arg);
    console.log(typeof(arg));
}
restEg(1,2,'pallab',true,4.5,{fruit:'apple'});



//spread operator:-
// But the spread syntax expands iterables(array or object) into individual elements.
//There can be more than one spread operator in javascript functions.
function spreadEg(){
    let ar1=[1,2,3,4];
    let ar2=['apple','mango','banana'];
    let ar3=[...ar1,...ar2];
    console.log(ar3)

    let obj1={name:'pallab',age:26};
    let obj2={fruit:'banana',price:12};
    let obj3={...obj1,...obj2};
    console.log(obj3);
}
spreadEg();