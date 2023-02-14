//array destructuring




//es5
// const myprogram=['js','php','c','java']

// var top= myprogram[0]
// var top1= myprogram[1]
// var top2= myprogram[2]
// var top3= myprogram[3]

// console.log(`my fev programming language is : ${top2}`)

//es6 advance js

// const myprogram1=['js','php','c','java']
//  let [top,top1,top2, top3]=myprogram1
//  console.log(`my fev programming language is : ${top2}`)

 const myprogram=['js','php','c','java']
 let [top, , , top3]=myprogram
 console.log(`my fev programming language is : ${top} and ${top3}`)

// function getScore(){
//     return [70,80,90,100]
// }
// // let [x,y,z,a]=getScore()
// //  console.log(x)

//  let[x,... arg]=getScore()
//   //console.log(y)
//   console.log(arg)
