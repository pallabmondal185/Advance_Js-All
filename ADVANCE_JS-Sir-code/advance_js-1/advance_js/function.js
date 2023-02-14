// function ab(){
//      return "sayan sarakr";
//  }

//  function add(a,b="raju kayal",c=ab()){
//      return a+ " "+b+ " "+c;
//  }
//  console.log(add("pritan pal"));

// function add(a,c,b=50){
//     return a+b+c;
// }
//  console.log(add(20,30));


// function add(a, b=30){
//     return a+b;
// }
// console.log(add(50));

// function abc(){
//     return "sarkar";
// }

// function add(a,b=" sayan",c=abc()){
//     return a+ " " +b+ " "+c;
// }
// console.log(add("hello"))

// function abc(){
//     return 100;


// }

// function add(a, b=20,c=abc()){
//     return a+b+c;
// }
// console.log(add(10));

// function add(x=1, y=x, z=x+y){
//     return x+y+z;
// }
// console.log(add());



//es5

let add=function(x,y){
    return x+y
}
console.log(add(20,30));

//es6

let a=(x,y)=>x+y
console.log(a(38,20));

