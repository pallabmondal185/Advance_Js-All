//In Object, the data-type of the key-field is restricted to integer, strings, and symbols. 
//Whereas in Map, the key-field can be of any data-type (integer, an array, function, even an object!)
 

const mymap = new Map();
// console.log(mymap);

//we can use any kind of key value
const key1 = 'mystr', key2 = {}, key3 = function () { };

//setting map values
mymap.set(key1, 'this is a string');
mymap.set(key2, 'this is a blank object');
mymap.set(key3, 'this is a empty function');
// console.log(mymap);

//getting the values from a MAP
// console.log(mymap.get(key1));
// console.log(mymap.get(key2));
// console.log(mymap.get(key3));

//getting the size of the map
// console.log(mymap.size);

//for...of loop can be used to get key and value
// for (let [key, value] of mymap) {
//     console.log(key + ":  " + value);
// }

//get only keys
// for(let key of mymap.keys()){
//     console.log(`key: ${key}`);
// }

//get only values
// for(let value of mymap.values()){
//     console.log(`value: ${value}`);
// }

//forEach loop can be used to get key and values
// mymap.forEach((value,key)=>{
//     console.log('value:-',value,'  key:- ',key)
// })

//converting map to array
let ArrayMap=Array.from(mymap);
console.log('the array of map is: ',ArrayMap)

//converting key to array
// let ArrayKey=Array.from(mymap.keys());
// console.log('the array of keys is: ',ArrayKey)

//converting values to array
// let ArrayValue=Array.from(mymap.values());
// console.log('the array of values is: ',ArrayValue)




