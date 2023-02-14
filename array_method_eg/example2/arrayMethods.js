
//every()
//a function to be run for each element of the array
//every() methods returns true if the function returns true for ALL element
//every() methods returns false if the function returns false for one element
// ar=[56,78,26,34,19];
// p = ar.every( ( age ) => age>18 );
// q = ar.every( ( age ) => age>30 );
// console.log(p);
// console.log(q);


//some()
//some() method is used to check whether at least one of the elements of the array satisfies the given condition or not.
//every() method is used to check whether all the elements of the array satisfy the given condition or not.
// let ar=[56,78,26,34,19];
// let p=ar.some(item=>item>77);
// let q=ar.some(item=>item>100);
// console.log(p,q)

//filter()
//filter() methods creates a new array filled width element that pass a test provided by a function
// age=[45,12,3,26,18,39,42,56];
// p = age.filter((age)=> age>20);
// q = age.filter((age)=> age<20);
// console.log(p);
// console.log(q);


//find()
//the find methods returns the value of the first element that passes a test or condition. 
//it return undefine if all element does not passes the condition.
// ar=[23,15,47,13,24,35];
// p=ar.find((age)=> age<20);
// q=ar.find((age)=> age<2);
// console.log(p);
// console.log(q);


//reduce()
//reduce() method executes a reducer function for array element
//total: initial value or previously return value
//num: the value of the current element
// ar = [1,2,3,4];
// p=ar.reduce((total,num)=>total + num);
// console.log(p);


//keys()
//the keys() method returns an array iterator objects with the keys of an array
// ar=[12,42,63,94,15];
// key = ar.keys();
// for(x of key){
//     console.log(x);
// }


//forEach()
//forEach() method calls a function for each element in an array
// ar=[1,2,3,4,5];
// ar.forEach( value => console.log(value));


//map()
//map() method creates a new array from calling a function for every array element.
//map() calls a function once for each element in array
// ar=[1,4,9,16,25];
// p=ar.map(Math.sqrt);  //p=ar.forEach(Math.sqrt)  //error
// q=ar.map((item)=> item);
// console.log(p);
// console.log(q);

// const persons=[
//     {name:'pallab', age:25},
//     {name:'ram', age:32},
//     {name:'gobinda', age:54}
// ]
// p=persons.map((item,index)=> item.name+' '+item.age+' '+ index);
// console.log(p);
