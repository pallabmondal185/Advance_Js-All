const mymap=new Map();
//set
mymap.set('key1','hwllow');
mymap.set('key2',{name: 'akash', roll:14});
mymap.set('key3',()=>{return 'this is a function'});

// console.log(mymap.get('key1'));
// console.log(mymap.get('key2'));
// console.log(mymap.get('key2').name);
// console.log(mymap.get('key3'));
// console.log(mymap.get('key3')());

// //for of
// for(let [key,value] of mymap){
//     console.log(key,value);
// }

// //getting only keyt
// for(let [key,value] of mymap){
//     console.log(key);
// }

// for(let key of mymap.keys()){
//     console.log(key);
// }

// // getting only values
// for(let [key,value] of mymap){
//     console.log(value);
// }

// for(let value of mymap.values()){
//     console.log(value);
// }

// //forEach
// mymap.forEach((key,value)=> console.log(key,value));

//converting to array
// console.log(Array.from(mymap));
// console.log(Array.from(mymap.keys()));
// console.log(Array.from(mymap.values()));

