// let add = function (x, y) {
// 	return x + y;
// };
// console.log(add(10, 20)); // 30


// let add = (x, y) => x + y;
// console.log(add(10, 20)); // 30;

//  let hello=(...x) =>{
//     console.log(x)
//  }
//  hello(1,2,3,4,5,6)

 let age = 20;
let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby



//es5

// let add= function(x,y){
//   return x+y
// }
// console.log(add(52,20))


// let a=(x,y=20)=> x+y
// console.log(a(10))


// let hello=(...x)=>{
//  console.log(x)
// }
// hello(1,2,3,4,5,6,7,8,52,89,859,85,45,65)